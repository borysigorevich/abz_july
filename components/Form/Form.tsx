import React, {useState, useEffect, useRef} from 'react';

import {useForm, Controller, SubmitHandler} from 'react-hook-form'

import {
    Box,
    Container,
    Typography,
    TextField,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    Input,
    Image,
    CircularProgress
} from '@common'
import {Button} from '@components'

import {emailRegex, nameRegex, phoneRegex, photoFormatRegex} from "./utils";

import * as styles from './FormStyles'
import {
    useLazyGetPositionsQuery,
    useLazyGetTokenQuery,
    useRegisterMutation
} from "../../services/UserService";

type Inputs = {
    name: string
    email: string
    phone: string
    position: number
    photo: File | string
}

type Resolution = {
    width: number
    height: number
}

export type FormType = {
    usersQuantityToShowRef: { current: number }
}

export const Form = ({usersQuantityToShowRef}: FormType) => {
    const imgRef = useRef<Resolution>({height: 0, width: 0})
    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: {errors, isValid}
    } = useForm<Inputs>({
        mode: 'all',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            position: 1,
            photo: ''
        }
    })
    const [getPositions, {data}] = useLazyGetPositionsQuery()
    const [getToken, {data: tokenData}] = useLazyGetTokenQuery()
    const [register, {data: registerData, isLoading}] = useRegisterMutation()

    const [photoName, setPhotoName] = useState('')

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const {email, phone, name, position} = data
        const photo = data.photo as File
        const {width, height} = imgRef.current
        if (!photoFormatRegex.test(photo.type)) {
            setError('photo', {type: 'validation', message: 'We accept only jpeg/jpg'})
        } else if (!(width >= 70 && height >= 70)) {
            setError('photo', {type: 'validation', message: 'Resolution at least 70x70'})
        } else if (photo.size > 5000000) {
            setError('photo', {type: 'validation', message: 'Size must not exceed 5MB'})
        } else {
            const formData = new FormData()
            formData.append('position_id', String(position))
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('photo', photo)

            usersQuantityToShowRef.current = 6

            await register({body: formData, token: tokenData.token})
            reset()
        }
    }

    useEffect(() => {
        getPositions(null)
        getToken(null)
    }, [])

    return (
        <Container sx={styles.Container}>
            <Typography variant={'h1'} sx={styles.Title}>
                {registerData ? 'User successfully registered' : 'Working with POST request'}
            </Typography>
            {registerData
                ? <Box>
                    <Image
                        src={'/success-image.svg'}
                        width={300}
                        height={300}
                    />
                </Box>
                : <Box component={'form'} sx={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                    <FormControl sx={styles.InputBox}>
                        <Controller
                            name={'name'}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                                pattern: {value: nameRegex, message: 'Invalid'}
                            }}
                            render={({field}) => (
                                <TextField
                                    sx={styles.getTextField(!!errors.name)}
                                    label={'Your name'}
                                    color={'secondary'}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name={'email'}
                            control={control}
                            rules={{
                                required: {value: true, message: 'Required'},
                                pattern: {value: emailRegex, message: 'Invalid'}
                            }}
                            render={({field}) => (
                                <TextField
                                    sx={styles.getTextField(!!errors.email)}
                                    label={'Email'}
                                    color={'secondary'}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name={'phone'}
                            control={control}
                            rules={{required: true, pattern: {value: phoneRegex, message: 'Invalid'}}}
                            render={({field}) => (
                                <TextField
                                    label={'Phone'}
                                    helperText={'+38 (XXX) XXX - XX - XX'}
                                    color={'secondary'}
                                    error={!!errors.phone}
                                    {...field}
                                />
                            )}
                        />
                    </FormControl>

                    <FormControl sx={styles.RadioControl}>
                        <FormLabel id={'radio-buttons-group-label'} color={'secondary'}>Select your position</FormLabel>
                        <Controller
                            name={'position'}
                            control={control}
                            render={({field}) => (
                                <RadioGroup
                                    aria-labelledby="radio-buttons-group-label"
                                    {...field}
                                >
                                    {data?.positions.map(position => (
                                        <FormControlLabel
                                            key={position.id}
                                            value={position.id}
                                            control={<Radio color={'secondary'}
                                            />
                                            }
                                            label={position.name}
                                        />
                                    ))}
                                </RadioGroup>
                            )}
                        />
                    </FormControl>


                    <FormControl sx={styles.FileControl}>
                        <FormControlLabel
                            control={
                                <Controller
                                    name={'photo'}
                                    control={control}
                                    rules={{
                                        required: {value: true, message: 'Required'},
                                    }}
                                    render={({field: {onChange},}) => (
                                        <Input
                                            type={'file'}
                                            error={!!errors.photo}
                                            sx={{display: 'none'}}
                                            onClick={(event) => {
                                                const element = event.target as HTMLInputElement
                                                element.value = ''
                                            }}
                                            onChange={(event) => {
                                                const target = event.target as HTMLInputElement
                                                // @ts-ignore
                                                const file = Object.values(target?.files).length > 0 && target?.files[0]
                                                if (!file) return
                                                setPhotoName(() => {
                                                    const fileName = file.name.split('.')[0]
                                                    return fileName.length > 30 ? fileName.substring(0, 30) : fileName
                                                })

                                                const img = document.createElement('img')
                                                img.src = URL.createObjectURL((file as Blob))
                                                img.onload = function () {
                                                    imgRef.current = {
                                                        width: img.naturalWidth,
                                                        height: img.naturalHeight
                                                    }
                                                }
                                                onChange(file)
                                            }}/>
                                    )}
                                />
                            }
                            sx={styles.getFileInput(!!errors.photo)}
                            label={'Upload'}
                        />
                        <Box
                            sx={styles.getFileNameBox(!!errors.photo)}>
                            <Typography>
                                {photoName ? photoName : 'Upload your photo'}
                            </Typography>
                        </Box>
                        <Box sx={styles.FileHelperText}>{errors.photo?.message}</Box>
                    </FormControl>

                    {isLoading
                        ? <CircularProgress color={'secondary'} sx={styles.LoaderSpinner}/>
                        : <Button disabled={!isValid} type={'submit'}>Sign up</Button>
                    }
                </Box>
            }
        </Container>
    );
};
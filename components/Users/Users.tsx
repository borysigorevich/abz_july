import React, {useState, useEffect} from 'react';

import {Container, Typography, Box, CircularProgress} from '@common'
import {Button} from '@components'
import {User} from "@components/Users/User";

import * as styles from './UsersStyels'
import {useLazyGetUsersQuery, UserType} from "../../services/UserService";

export type UsersType = {
    usersQuantityToShowRef: { current: number }
}

export const Users = ({usersQuantityToShowRef}: UsersType) => {
    const [getUsers, {data, isFetching, isLoading}] = useLazyGetUsersQuery()
    const [users, setUsers] = useState<UserType[]>([])

    const handleRefetch = () => {
        usersQuantityToShowRef.current += 6
        getUsers({count: usersQuantityToShowRef.current})
    }

    useEffect(() => {
        if (data?.users) {
            setUsers(data.users.slice(0, usersQuantityToShowRef.current))
        }
    }, [data, usersQuantityToShowRef.current])

    useEffect(() => {
        getUsers({count: 6})
    }, [])

    return (
        <Container sx={styles.Container}>
            <Typography variant={'h1'} sx={styles.Title}>Working with GET request</Typography>
            <Box sx={styles.Grid}>
                {users.map(user => (
                    <User
                        key={user.id}
                        photo={user.photo}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        position={user.position}
                    />
                ))}
            </Box>
            {isLoading
                ? <CircularProgress color={'secondary'}/>
                : usersQuantityToShowRef.current < data?.total_users! && isFetching
                    ? <CircularProgress color={'secondary'}/>
                    : <Button width={'120px'} onClick={handleRefetch}>Show more</Button>
            }
        </Container>
    );
};

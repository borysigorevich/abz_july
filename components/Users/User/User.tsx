import React, {memo} from 'react';

import {Image, Box} from '@common'

import {WithTooltip} from "./WithTooltip";
import * as styles from './UserStyles'

type UserType = {
    photo: string
    name: string
    email: string
    phone: string
    position: string
}

export const User = memo(({photo, name, email, phone, position}: UserType) => {

    return (
        <Box sx={styles.UserBox}>
            <Box sx={styles.ImageBox}>
                <Image
                    src={photo}
                    width={70}
                    height={70}
                    layout={'fixed'}
                    style={styles.Image}
                />
            </Box>
            <Box sx={styles.Name}>
                <WithTooltip>{name}</WithTooltip>
            </Box>
            <WithTooltip>{position}</WithTooltip>
            <WithTooltip>{email}</WithTooltip>
            <WithTooltip>{phone}</WithTooltip>
        </Box>
    );
})
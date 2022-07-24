import React from 'react';
import MuiButton, {ButtonProps as MuiButtonProps} from '@mui/material/Button'

import * as styles from './ButtonStyles'

type ButtonProps = {
    width?: string
} & MuiButtonProps

export const Button = ({width, children, ...rest}: ButtonProps) => {
    return (
        <MuiButton sx={styles.Button(width)} variant={'contained'} color={'primary'} {...rest}>
            {children}
        </MuiButton>
    );
};
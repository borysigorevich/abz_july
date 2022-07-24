import React from 'react';
import {AppBar, Toolbar, Box, Container, Image} from '@common'
import {Button} from '@components'

import * as styles from './HeaderStyles'

export const Header = () => {

    return (
        <AppBar sx={styles.AppBar} position={'sticky'}>
            <Toolbar sx={styles.Toolbar}>
                <Container sx={styles.Container}>
                    <Box sx={styles.ImageBox}>
                        <Image
                            src={'/Logo.svg'}
                            width={104}
                            height={26}
                        />
                    </Box>
                    <Box sx={styles.ButtonBox}>
                        <Button>Users</Button>
                        <Button>Sign up</Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
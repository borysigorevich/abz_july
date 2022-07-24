import React from 'react';
import {Container, Typography, Box, Image} from '@common'
import {Button} from '@components'

import * as styles from './DescriptionStyles'

export const Description = () => {

    return (
        <Box sx={styles.Box}>
            <Box sx={styles.Background}/>
            <Image
                className={'bg-image'}
                objectFit={'cover'}
                alt={'bg-image'}
                layout={'fill'}
                priority={true}
                src={'/pexels-alexandr-podvalny-1227513.jpeg'}
            />
            <Container sx={styles.Container}>
                <Typography variant={'h1'} sx={styles.Title}>Test assignment for front-end developer</Typography>
                <Typography variant={'body1'} sx={styles.Text}>What defines a good front-end developer is one that has
                    skilled knowledge
                    of
                    HTML, CSS, JS with
                    a vast understanding of User design thinking as they'll be building web interfaces with
                    accessibility in
                    mind. They should also be excited to learn, as the world of Front-End Development keeps
                    evolving.
                </Typography>
                <Button>Sign up</Button>
            </Container>
        </Box>
    );
};
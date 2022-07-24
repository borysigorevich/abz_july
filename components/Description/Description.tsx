import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Container, Typography, Box} from '@common'
import {Button} from '@components'

import {BgImage} from './BgImage'
import * as styles from './DescriptionStyles'

export const Description = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [width, setWidth] = useState<number>()
    const [height, setHeight] = useState<number>()

    const handleResize = useCallback(() => {
        const {width, height} = containerRef.current?.getBoundingClientRect()!
        setWidth(width)
        setHeight(height)
    }, [])

    useEffect(() => {
        const {width, height} = containerRef.current?.getBoundingClientRect()!

        setWidth(width)
        setHeight(height)

    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Box ref={containerRef} sx={styles.Box}>
            <Box sx={styles.Background}/>
            <BgImage width={width} height={height}/>
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
import React from 'react';
import {Box, Image} from '@common'

import * as styles from './BgImageStyles'

type BgImageProps = {
    width?: number
    height?: number
}

export const BgImage = ({width, height}: BgImageProps) => {
    return (
        <Box sx={styles.Box}>
            {width && height && <Image
                objectFit={'cover'}
                src={'/pexels-alexandr-podvalny-1227513.jpeg'}
                layout={'fixed'}
                width={width}
                height={height}
                priority={true}
            />}
        </Box>
    );
};
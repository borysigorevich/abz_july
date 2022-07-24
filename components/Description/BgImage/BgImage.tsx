import React from 'react';
import {Image} from '@common'

export const BgImage = () => {
    return (
        <Image
            className={'bg-image'}
            objectFit={'cover'}
            alt={'bg-image'}
            layout={'fill'}
            src={'/pexels-alexandr-podvalny-1227513.jpeg'}
        />
    )

};
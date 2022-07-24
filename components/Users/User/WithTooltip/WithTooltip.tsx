import React from 'react';
import {Tooltip, Typography} from '@common'

type WithTooltip = {
    children: string
}

export const WithTooltip = ({children}: WithTooltip) => {
    const isLongString = children.length > 24
    const truncateString = isLongString ? children.substring(0, 24) + '...' : children

    return (
        <>
            {isLongString
                ? <Tooltip title={children} placement={'top'}>
                    <Typography>{truncateString}</Typography>
                </Tooltip>
                : <Typography>{children}</Typography>
            }
        </>
    );
};
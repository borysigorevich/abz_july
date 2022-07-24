import {useRef} from "react";
import type {NextPage} from 'next'
import {Description, Users, Form} from "@components";
import {Box} from '@common'


const Home: NextPage = () => {
    const usersQuantityToShowRef = useRef(6)

    return (
        <Box sx={{backgroundColor: 'background.default'}}>
            <Description/>
            <Users usersQuantityToShowRef={usersQuantityToShowRef}/>
            <Form usersQuantityToShowRef={usersQuantityToShowRef}/>
        </Box>
    )
}

export default Home;
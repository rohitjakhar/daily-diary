import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { project } from '../config/project'
import Header from './Header'

const AccessDenied = () => {
    return (
        <>
            <Head>
                <title>{project.name} | Access Denied</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header heading="Access Denied" />
            <Container minH={["72vh", "75vh"]} minW="100%" bg="back.800" ></Container>
        </>
    )
}

export default AccessDenied

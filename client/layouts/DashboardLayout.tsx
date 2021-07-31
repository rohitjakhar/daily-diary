import React from 'react'
import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/layout'
import { Box, Stack, Center } from '@chakra-ui/react'
import Link from 'next/link'
import Header from '../components/Header'
import { project } from '../config/project'


export const DashboardLayout = ({ children, heading }) => {
    return (
        <>
            <Head>
                <title>{project.name} | Dashboard | {heading}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header heading={heading} />
            
            <Grid
                minH={["72vh", "75vh"]}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                bg="back.800"
                alignContent= {"center"}
            >
               
                <GridItem rowSpan={2} colSpan={5}  >
                {children}
                </GridItem>
            </Grid>

        </>
    )
}


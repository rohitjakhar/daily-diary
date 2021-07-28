import React from 'react'
import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/layout'
import { Box, Stack } from '@chakra-ui/react'
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
            >
                <GridItem rowSpan={2} colSpan={1} >

                    <Stack>
                        {/* Links */}
                        {/* <Stack ml="6" py="6" spacing="4" >
                            <Box p="2" fontSize="larger" color="white"> <Link href="/dashboard/investments" >Investments</Link> </Box>
                            <Box p="2" fontSize="larger" color="white"> <Link href="/dashboard/other-assets" >Other Assets</Link> </Box>
                            <Box p="2" fontSize="larger" color="white"> <Link href="/dashboard/expenses" >Expenses</Link> </Box>
                            <Box p="2" fontSize="larger" color="white"> <Link href="/dashboard/incomes" >Incomes</Link> </Box>
                            <Box p="2" fontSize="larger" color="white"> <Link href="/dashboard/bank-accounts" >Bank Accounts</Link> </Box>

                        </Stack> */}
                    </Stack>

                </GridItem>
                <GridItem rowSpan={2} colSpan={5}  >
                    {children}
                </GridItem>
            </Grid>


        </>
    )
}


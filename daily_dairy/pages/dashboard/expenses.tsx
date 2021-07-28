import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/AccessDenied'
import { DashboardLayout } from '../../layouts/DashboardLayout'


export default function Page() {
    const [session, loading] = useSession()
    const [content, setContent] = useState()

    // Fetch content from protected route
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/protected')
            const json = await res.json()
            if (json.content) { setContent(json.content) }
        }
        fetchData()
    }, [session])

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display access denied message
    if (!session) { return <AccessDenied /> }

    // If session exists, display content
    return (
        <DashboardLayout heading="Expenses">
            <h1>Hello</h1>
        </DashboardLayout>
    )
}


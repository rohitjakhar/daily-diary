import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import AccessDenied from '../../components/AccessDenied'
import { DashboardLayout } from '../../layouts/DashboardLayout'


export default function Page() {
    const [session, loading] = useSession()
    const [content, setContent] = useState()

    // Fetch content from protected route
  

    // When rendering client side don't display anything until loading is complete


    // If no session exists, display access denied message
   

    // If session exists, display content
    return (
        <DashboardLayout heading="Dashboard">
            {/* <h1>Hello</h1> */}
        </DashboardLayout>
    )
}


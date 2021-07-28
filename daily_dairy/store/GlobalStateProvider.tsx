import React from 'react'

const GlobalStateProvider = ({ children }: { children: React.ReactChildren }) => {
    return (
        <>
            {children}
        </>
    )
}

export default GlobalStateProvider

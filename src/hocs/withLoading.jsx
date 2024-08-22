import React from "react"

export function withReport(Children) {
    return ({loading, ...props}) => {
        if(loading) return <h2 className="text-red-500">Loading...</h2>
        return (
            <div>
                {/* <path></path> */}
                <Children {...props}/>
                <table></table>
            </div>
        )
    }
}
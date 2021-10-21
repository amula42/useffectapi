import React, { useEffect, useState } from 'react'

const Cleanup = () => {

    const [wwidth, setWwidth] = useState(window.screen.width);

    const actualWidth = () => {
        setWwidth(window.innerWidth);
    }

    useEffect( () => {
        window.addEventListener("resize", actualWidth);
        return () => {
            window.removeEventListener("resize", actualWidth);
        }
    } );

    return (
        <>
            <h5 className="text-center">You are at - {wwidth} view</h5>
        </>
    )
}

export default Cleanup

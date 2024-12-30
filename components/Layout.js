import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import dynamic from "next/dynamic"
const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false
})


const animationData = dynamic(() => import("/public/lottie/23796-ring-of-fire.json"), {
    ssr: false
})
const Layout = ({ children }) => {
   
    const [load, setLoad] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    useEffect(() => {
        setIsMounted(true)

        const handleImageLoad = () => {
            let loadedImages = 0
            const images = document.images

            function incrementCounter() {
                loadedImages++
                if (loadedImages === images.length) {
                    setTimeout(() => setLoad(false), 1000)
                }
            }

            if (images.length === 0) {
                setLoad(false)
                return
            }

            Array.from(images).forEach(img => {
                if (img.complete) {
                    incrementCounter()
                } else {
                    img.addEventListener("load", incrementCounter)
                    img.addEventListener("error", incrementCounter) // Handle failed image loads
                }
            })
        }

        handleImageLoad()
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.body.style.overflow = load ? "hidden" : "auto"
            if (!load) window.scrollTo(0, 0)
        }
    }, [load])

    if (!isMounted) return null // Prevent SSR flash

    return (
        <>
            {load && (
                <div className="max-h-[100vh] bg-black flex items-center fixed z-50 justify-center inset-0 w-full">
                    <div className="md:block hidden">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={440}
                            resizeMode="cover"
                        />
                    </div>
                    <div className="md:hidden">
                        <Lottie
                            options={defaultOptions}
                            height={120}
                            width={180}
                            resizeMode="cover"
                        />
                    </div>
                </div>
            )}
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
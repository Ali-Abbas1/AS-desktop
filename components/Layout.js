import React, { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Lottie from "react-lottie"
import animationData from "/public/lottie/23796-ring-of-fire.json"
const Layout = ({ children }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }
    const [load, setLoad] = useState(true)

    useEffect(() => {
        var imgs = document.images,
            len = imgs.length,
            counter = 0
        ;[].forEach.call(imgs, function (img) {
            if (img.complete) incrementCounter()
            else img.addEventListener("load", incrementCounter, false)
        })

        function incrementCounter() {
            counter++
            if (counter === len) {
                setTimeout(() => {
                    setLoad(false)
                }, 1000)
            }
        }
    }, [])

    useEffect(() => {
        if (load) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
            window.scroll(0, 0)
        }
    }, [load])
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

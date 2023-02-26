import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

const SavingTheWorld = () => {
    useEffect(() => {
        var canvas = document.getElementById("canvas")
        var ctx = canvas.getContext("2d")
        var cw = canvas.width
        var ch = canvas.height
        var offsetX, offsetY
        function reOffset() {
            var BB = canvas.getBoundingClientRect()
            offsetX = BB.left
            offsetY = BB.top
        }
        reOffset()
        window.onscroll = function (e) {
            reOffset()
        }
        window.onresize = function (e) {
            reOffset()
        }

        ctx.fillStyle = "#18181B"

        // mouse related variables
        var PI2 = Math.PI * 2
        var mouseRadius = 28 // this is the mouse's radius of influence
        var mouseRadiusSquared = mouseRadius * mouseRadius
        var mouseIsDown = false
        var mx, my
        var ticktick = 0

        // define a bunch of hex objects stored in an array
        var hexRadius = 1
        var hexPadding = 10
        var hexes = []
        for (var y = hexRadius; y < ch; y += hexRadius * 2 + hexPadding) {
            for (var x = hexRadius; x < cw; x += hexRadius * 2 + hexPadding) {
                hexes.push({ startingX: x, startingY: y, x: x, y: y })
            }
        }

        // start a continuously running ticker loop
        requestAnimationFrame(tick)

        // listen for mouse events
        //$("#canvas").mousedown(function(e){handleMouseDown(e);});
        //$("#canvas").mouseup(function(e){handleMouseUp(e);});

        canvas.onmousemove = function (e) {
            handleMouseDown(e)
        }

        // draw every hex in its current position
        function draw() {
            ctx.clearRect(0, 0, cw, ch)
            ctx.beginPath()
            for (var i = 0; i < hexes.length; i++) {
                var h = hexes[i]
                ctx.moveTo(h.x, h.y)
                ctx.arc(h.x, h.y, hexRadius, 0, PI2)
                ctx.closePath()
            }
            ctx.fill()
        }

        // create a continuously running ticker
        function tick(time) {
            // update each hex position based on its
            // position relative to the mouse
            for (var i = 1; i < hexes.length; i++) {
                var h = hexes[i]
                // calculate if this hex is inside the mouse radius
                var dx = h.x - mx * 0.4
                var dy = h.y - my * 0.21
                if (mouseIsDown && dx * dx + dy * dy < mouseRadiusSquared) {
                    // hex is inside mouseRadius
                    // so mouseDown repels hex
                    h.x += dx / 10
                    h.y += dy / 10
                    ticktick++
                    // console.log(ticktick);
                    if (ticktick > 20) (mouseIsDown = false), (ticktick = 0)
                } else if (h.x == h.startingX && h.y == h.startingY) {
                    // hex is at startingX/Y & is not being repelled
                    // so do nothing
                } else {
                    // hex has moved off startingX/Y
                    // but is no longer being repelled
                    // so gravity attracts hex back to its startingX/Y
                    dx = h.x - h.startingX
                    dy = h.y - h.startingY
                    h.x -= dx / 20
                    h.y -= dy / 20
                }
            }

            // redraw the hexes in their new positions
            draw()

            // request another tick
            requestAnimationFrame(tick)
        }

        // listen for mousedown events
        function handleMouseDown(e) {
            // tell the browser we're handling this event
            e.preventDefault()
            e.stopPropagation()
            // console.log(e.clientX, "client X")

            // calculate the mouse position
            mx = parseInt(e.clientX - offsetX)
            my = parseInt(e.clientY - offsetY)

            // set the mousedown flag
            mouseIsDown = true
            ticktick = 0
        }

        // listen for mouseup events
        function handleMouseUp(e) {
            // tell the browser we're handling this event
            e.preventDefault()
            e.stopPropagation()

            // clear the mousedown flag
            mouseIsDown = false
        }
    }, [])

    const videoRef = useRef()
    const video1Ref = useRef()
    const video2Ref = useRef()
    const video3Ref = useRef()
    const video4Ref = useRef()
    useEffect(() => {
        if (videoRef && videoRef.current) {
            videoRef.current.addEventListener("mouseover", function () {
                videoRef.current.play()
                videoRef.current.style.opacity = 0.6
            })
            videoRef.current.addEventListener("mouseleave", function () {
                videoRef.current.pause()
                videoRef.current.style.opacity = 0
            })
        }
        if (video1Ref && video1Ref.current) {
            video1Ref.current.addEventListener("mouseover", function () {
                video1Ref.current.play()
                video1Ref.current.style.opacity = 0.6
            })
            video1Ref.current.addEventListener("mouseleave", function () {
                video1Ref.current.pause()
                video1Ref.current.style.opacity = 0
            })
        }
        if (video2Ref && video2Ref.current) {
            video2Ref.current.addEventListener("mouseover", function () {
                video2Ref.current.play()
                video2Ref.current.style.opacity = 0.6
            })
            video2Ref.current.addEventListener("mouseleave", function () {
                video2Ref.current.pause()
                video2Ref.current.style.opacity = 0
            })
        }
        if (video3Ref && video3Ref.current) {
            video3Ref.current.addEventListener("mouseover", function () {
                video3Ref.current.play()
                video3Ref.current.style.opacity = 0.6
            })
            video3Ref.current.addEventListener("mouseleave", function () {
                video3Ref.current.pause()
                video3Ref.current.style.opacity = 0
            })
        }
        if (video4Ref && video4Ref.current) {
            video4Ref.current.addEventListener("mouseover", function () {
                video4Ref.current.play()
                video4Ref.current.style.opacity = 0.6
            })
            video4Ref.current.addEventListener("mouseleave", function () {
                video4Ref.current.pause()
                video4Ref.current.style.opacity = 0
            })
        }
    })
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })
    return (
        <>
            <div className="bg-black boxes " ref={ref}>
                <div className={`w-full ${inView ? "box6" : ""} `}>
                    <div className={`${inView ? "box7" : ""}`}>
                        <div className="flex">
                            <div className="px-20 pb-20 flex flex-col justify-end items-start h-[720px]  min-w-[50%] relative">
                                <div className="w-full video-container absolute top-0 left-0 ">
                                    <video
                                        ref={videoRef}
                                        muted
                                        className="w-[100%] h-[100%] opacity-0"
                                    >
                                        <source
                                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/videos/canva.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                                <div className="pointer-events-none">
                                    <p className=" text-xl leading-5 tracking-[-2%] font-Archivo font-semibold text-zinc-400">
                                        CANVA
                                    </p>
                                    <h2 className="font-extrabold basement-bold text-[#ffff] text-[32px] pt-6">
                                        Saving the world - One tree at a time.{" "}
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={`px-20 pb-20 flex flex-col justify-end items-start h-[720px] ${
                                    inView ? "box8" : ""
                                } min-w-[50%] relative`}
                            >
                                <div className="w-full video-container absolute top-0 left-0 ">
                                    <video
                                        ref={video1Ref}
                                        muted
                                        className="w-[100%] h-[100%] opacity-0"
                                        loop
                                    >
                                        <source
                                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/videos/NYS.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                                <div className="pointer-events-none">
                                    <p className=" text-xl leading-5 tracking-[-2%] font-Archivo font-semibold text-zinc-400">
                                        NYS
                                    </p>
                                    <h2 className="font-extrabold basement-bold text-[#ffff] text-[32px] pt-6">
                                        Digitalization of a 15-year-old legacy
                                        newspaper.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className={`${inView ? "box10" : ""}`}>
                        <div className="flex ">
                            <div className="px-20 pb-20 flex flex-col justify-end items-start h-[720px] min-w-[50%] relative">
                                <div className="w-full video-container absolute top-0 left-0 ">
                                    <video
                                        ref={video2Ref}
                                        muted
                                        className="w-[100%] opacity-0"
                                        loop
                                    >
                                        <source
                                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/videos/toyota.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                                <div className="pointer-events-none">
                                    <p className=" text-xl leading-5 tracking-[-2%] font-Archivo font-semibold text-zinc-400">
                                        TOYOTA
                                    </p>
                                    <h2 className="font-extrabold basement-bold text-[#ffff] text-[32px] pt-6">
                                        UX Optimization that led to 87% increase
                                        in conversion.
                                    </h2>
                                </div>
                            </div>
                            <div
                                className={`px-20 pb-20 flex flex-col justify-end items-start h-[720px] ${
                                    inView ? "box11" : ""
                                } min-w-[50%] relative`}
                            >
                                <div className="w-full video-container absolute top-0 left-0 ">
                                    <video
                                        ref={video3Ref}
                                        muted
                                        className="w-[100%] opacity-0"
                                        loop
                                    >
                                        <source
                                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/videos/sxm.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                </div>
                                <div className="pointer-events-none">
                                    <p className=" text-xl leading-5 tracking-[-2%] font-Archivo font-semibold text-zinc-400">
                                        SXM
                                    </p>
                                    <h2 className="font-extrabold basement-bold text-[#ffff] text-[32px] pt-6">
                                        Leading American broadcasting company.
                                        &apos;Hello, America&apos;
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <div className="flex ">
                        <div className="px-20 pb-20 flex flex-col justify-end items-start h-[720px] min-w-[50%] relative ">
                            <div className="w-full video-container absolute top-0 left-0 ">
                                <video
                                    ref={video4Ref}
                                    muted
                                    className="w-[100%] opacity-0"
                                    loop
                                >
                                    <source
                                        src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/videos/scte.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="pointer-events-none">
                                <p className=" text-xl leading-5 tracking-[-2%] font-Archivo font-semibold text-zinc-400">
                                    SCTE
                                </p>
                                <h2 className="font-extrabold basement-bold text-[#ffff] text-[32px] pt-6">
                                    Leader in standards development for the
                                    cable industry.
                                </h2>
                            </div>
                        </div>
                        <div
                            className={`relative flex justify-center items-center text-center ${
                                inView ? "box12" : ""
                            } min-w-[50%]`}
                        >
                            <canvas
                                id="canvas"
                                className="w-full h-full"
                            ></canvas>
                            <div className="absolute">
                                <h2 className=" font-extrabold basement-bold text-zinc-800 text-[64px] leading-[76.8px] tracking-[-2%] max-w-[695px]">
                                    DOPE STUFF BEHIND THE BOX
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavingTheWorld

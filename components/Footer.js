import Link from "next/link"
import React, { useEffect } from "react"
import { debounce } from "./Utils"

const Footer = () => {
    let ROWS
    let COLS
    var NUM_PARTICLES = (ROWS = 250) * (COLS = 500),
        THICKNESS = Math.pow(90, 2),
        SPACING = 3,
        MARGIN = 5,
        COLOR = 220,
        DRAG = 0.95,
        EASE = 0.25,
        container,
        particle,
        mouse,
        list,
        ctx,
        tog,
        man,
        dx,
        dy,
        mx,
        my,
        d,
        t,
        f,
        a,
        b,
        i,
        n,
        w,
        h,
        p,
        s,
        r,
        c
    particle = {
        vx: 0,
        vy: 0,
        x: 0,
        y: 0
    }
    const init = () => {
        container = document.getElementById("main")
        let canvas = document.getElementById("myCanvas")
        ctx = canvas.getContext("2d")
        man = true
        tog = true
        list = []

        w = canvas.width = COLS * SPACING + MARGIN * 2
        h = canvas.height = ROWS * SPACING + MARGIN * 2
        // container.style.marginLeft = Math.round(w * .1) + "px";
        // container.style.marginTop = Math.round(h * .1) + "px";
        for (i = 0; i < NUM_PARTICLES; i++) {
            p = Object.create(particle)
            p.x = p.ox = MARGIN + SPACING * (i % COLS)
            p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS)

            list[i] = p
        }

        let offsetScreenX, offsetScreenY
        const reOffset = () => {
            let bb = canvas.getBoundingClientRect()
            offsetScreenX = bb.left
            offsetScreenY = bb.top
        }
        const debouncedResize = debounce(reOffset, 300)
        const debouncedScroll = debounce(reOffset, 10)
        window.addEventListener("resize", debouncedResize)
        window.addEventListener("scroll", debouncedScroll)
        container.addEventListener("mousemove", function (e) {
            if (window.innerWidth == 2048) {
                mx = (e.clientX - offsetScreenX) * 0.78
                my = (e.clientY - offsetScreenY) / 1.37
            } else if (window.innerWidth == 3072) {
                mx = (e.clientX - offsetScreenX) * 0.51
                my = (e.clientY - offsetScreenY) / 1.98
            } else if (window.innerWidth == 4608) {
                mx = (e.clientX - offsetScreenX) * 0.33
                my = (e.clientY - offsetScreenY) / 2.78
            } else if (window.innerWidth == 6144) {
                mx = (e.clientX - offsetScreenX) * 0.25
                my = (e.clientY - offsetScreenY) / 3.88
            } else if (window.innerWidth == 2304) {
                mx = (e.clientX - offsetScreenX) * 0.69
                my = (e.clientY - offsetScreenY) / 1.52
            } else if (window.innerWidth == 1920) {
                mx = (e.clientX - offsetScreenX) * 0.805
                my = (e.clientY - offsetScreenY) / 1.27
            } else if (window.innerWidth == 1706.67) {
                mx = (e.clientX - offsetScreenX) * 2.25
                my = (e.clientY - offsetScreenY) / 0.1
            } else if (window.innerWidth == 1536) {
                mx = (e.clientX - offsetScreenX) * 1.01
                my = (e.clientY - offsetScreenY) / 1.01
            } else if (window.innerWidth == 2133) {
                mx = (e.clientX - offsetScreenX) * 0.72
                my = (e.clientY - offsetScreenY) * 0.67
            } else if (window.innerWidth == 2400) {
                mx = (e.clientX - offsetScreenX) * 0.64
                my = (e.clientY - offsetScreenY) * 0.65
            } else if (window.innerWidth == 2560) {
                mx = (e.clientX - offsetScreenX) * 0.59
                my = (e.clientY - offsetScreenY) * 0.62
            } else if (window.innerWidth == 2880) {
                mx = (e.clientX - offsetScreenX) * 0.52
                my = (e.clientY - offsetScreenY) * 0.56
            } else if (window.innerWidth == 3840) {
                mx = (e.clientX - offsetScreenX) * 0.4
                my = (e.clientY - offsetScreenY) * 0.42
            } else if (window.innerWidth == 5760) {
                mx = (e.clientX - offsetScreenX) * 0.26
                my = (e.clientY - offsetScreenY) * 0.27
            } else if (window.innerWidth == 7680) {
                mx = (e.clientX - offsetScreenX) * 0.2
                my = (e.clientY - offsetScreenY) * 0.2
            }
            // else if (window.innerWidth == 1396) {
            //   mx = (e.clientX - bounds.left) * 1.1;
            //   my = (e.clientY - bounds.top) * 1.1;
            // }
            // else if (window.innerWidth == 1380) {
            //   mx = (e.clientX - bounds.left) * 1.1;
            //   my = (e.clientY - bounds.top) * 1.1;
            // }
            // else if (window.innerWidth < 1536) {
            //     mx = e.screenX - offsetScreenX
            //     my = (e.clientY - offsetScreenY) * 1.25
            // }
            else {
                mx = (e.clientX - offsetScreenX) * 1.3
                my = (e.clientY - offsetScreenY) * 1.2
            }
            man = true
            // );
        })

        container.appendChild(canvas)
    }

    const step = () => {
 
        if ((tog = !tog)) {
            if (!man) {
                t = +new Date() * 0.001
                mx = w * 0.5 + Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45

                my =
                    h * 0.5 +
                    Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45
            }
            for (i = 0; i < NUM_PARTICLES; i++) {
                p = list[i]
                d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy
                f = -THICKNESS / d

                if (d < THICKNESS) {
                    t = Math.atan2(dy, dx)
                    p.vx += f * Math.cos(t)
                    p.vy += f * Math.sin(t)
                }

                p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE

                p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE
            }
        } else {
            b = (a = ctx.createImageData(w, h)).data

            for (i = 0; i < NUM_PARTICLES; i++) {
                p = list[i]
                ;(b[(n = (~~p.x + ~~p.y * w) * 4)] =
                    b[n + 1] =
                    b[n + 2] =
                        COLOR),
                    (b[n + 3] = 255)
            }
            ctx.putImageData(a, 0, 0)
        }

        requestAnimationFrame(step)
    }
    // mouse events for 'book a call now' button
    useEffect(() => {
        const handleMouseMove = (event) => {
            const y = event.pageY - 10
            const x = event.pageX - 100
            const ref = document.getElementById("scrollDiv")
            const scrollLeft =
                window.pageXOffset !== undefined
                    ? window.pageXOffset
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollLeft
            const scrollTop =
                window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop
            ref.style.left = x - scrollLeft + "px"
            ref.style.top = y - scrollTop + "px"
        }
        document.addEventListener("mousemove", handleMouseMove, false)
    }, [])
    useEffect(() => {
        init()
        step()
    }, [])
    return (
        <>
            <div className="text-center  relative ">
                <div id="main" className="w-full h-full">
                    <canvas
                        id="myCanvas"
                        className="flex justify-center items-center bg-black w-full h-full mt-[-30px]"
                    />
                    <div
                        id="main1"
                        className="textBox mx-auto flex justify-center items-center absolute w-full h-full "
                    >
                        <span
                            id="main2"
                            className="transitioned basement-bold inline-block font-extrabold text-[64px] leading-[76.8px] text-white -z-50  "
                        >
                            CUT THROUGH THE NOISE.
                            <br />
                            <span className="basement-bold font-extrabold text-3xl leading-9 pt-5 uppercase">
                                30 minutes. no strings attached consultation
                                with the alphas
                            </span>
                        </span>
                    </div>
                    <Link href="https://www.google.com">
                        <a>
                            <div
                                id="scrollDiv"
                                className="cursor  relative hover:cursor-pointer basement-bold font-extrabold text-xl text-white w-[230px] "
                            >
                                BOOK A CALL NOW
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex pt-16 justify-between px-20 pb-10">
                <div className="">
                    <h2 className="text-left font-Archivo font-light text-2xl leading-6 text-zinc-400">
                        FIND US
                    </h2>
                    <div className="flex pt-4 justify-between space-x-3 ">
                        <p className="font-Archivo font-light text-lg leading-[18px] text-white cursor-pointer">
                            DRIBBBLE
                        </p>
                        <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/footer-dot.svg" />
                        <p className="font-Archivo font-light text-lg leading-[18px] text-white cursor-pointer">
                            GITHUB
                        </p>
                        <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/footer-dot.svg" />
                        <p className="font-Archivo font-light text-lg leading-[18px] text-white cursor-pointer">
                            LINKEDIN
                        </p>
                        <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/footer-dot.svg" />
                        <p className="font-Archivo font-light text-lg leading-[18px] text-white cursor-pointer">
                            INSTAGRAM
                        </p>
                        <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/footer-dot.svg" />
                        <p className="font-Archivo font-light text-lg leading-[18px] text-white cursor-pointer">
                            SPOTIFY
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-left font-Archivo font-light text-2xl leading-6 text-zinc-400">
                        UP CLOSE AND PERSONAL
                    </h2>
                    <p
                        className="text-left font-Archivo text-lg leading-[18px] text-white pt-4 cursor-pointer"
                        onClick={() =>
                            (window.location = "mailto:HOWDY@ALPHASQUAD.TECH")
                        }
                    >
                        HOWDY@ALPHASQUAD.TECH
                    </p>
                </div>
                <div>
                    <p className="text-left font-Archivo text-2xl leading-[31.2px] text-zinc-400 cursor-pointer">
                        © ALPHASQUAD LLC 2022
                        <br />
                        ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer

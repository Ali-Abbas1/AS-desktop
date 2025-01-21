import Link from "next/link"
import React, { useEffect } from "react"
import { debounce } from "./Utils"

const Footer = () => {
    // Animation constants
    const GRID = {
        ROWS: 250,
        COLS: 500,
        SPACING: 3,
        MARGIN: 5
    }

    const PARTICLE = {
        TOTAL: GRID.ROWS * GRID.COLS,
        COLOR: 220,
        THICKNESS: Math.pow(90, 2),
        DRAG: 0.95,
        EASE: 0.25
    }

    let animationContext = {
        canvas: null,
        ctx: null,
        particles: [],
        mouseX: 0,
        mouseY: 0,
        toggle: true
    }

    const initParticles = () => {
        return Array(PARTICLE.TOTAL).fill().map((_, i) => ({
            vx: 0,
            vy: 0,
            x: GRID.MARGIN + GRID.SPACING * (i % GRID.COLS),
            y: GRID.MARGIN + GRID.SPACING * Math.floor(i / GRID.COLS),
            ox: GRID.MARGIN + GRID.SPACING * (i % GRID.COLS),
            oy: GRID.MARGIN + GRID.SPACING * Math.floor(i / GRID.COLS)
        }))
    }

    const animate = () => {
        const { ctx, canvas, particles, mouseX, mouseY, toggle } = animationContext

        if ((animationContext.toggle = !toggle)) {
            particles.forEach(p => {
                const dx = mouseX - p.x
                const dy = mouseY - p.y
                const d = dx * dx + dy * dy

                if (d < PARTICLE.THICKNESS) {
                    const f = -PARTICLE.THICKNESS / d
                    const t = Math.atan2(dy, dx)
                    p.vx += f * Math.cos(t)
                    p.vy += f * Math.sin(t)
                }

                p.x += (p.vx *= PARTICLE.DRAG) + (p.ox - p.x) * PARTICLE.EASE
                p.y += (p.vy *= PARTICLE.DRAG) + (p.oy - p.y) * PARTICLE.EASE
            })
        } else {
            const imageData = ctx.createImageData(canvas.width, canvas.height)
            const data = imageData.data

            particles.forEach(p => {
                const i = (~~p.x + ~~p.y * canvas.width) * 4
                data[i] = data[i + 1] = data[i + 2] = PARTICLE.COLOR
                data[i + 3] = 255
            })

            ctx.putImageData(imageData, 0, 0)
        }

        requestAnimationFrame(animate)
    }

    useEffect(() => {
        const canvas = document.getElementById("myCanvas")
        const container = document.getElementById("main")
        const button = document.getElementById("scrollDiv")
        if (!canvas || !container || !button) return

        // Initialize canvas
        canvas.width = GRID.COLS * GRID.SPACING + GRID.MARGIN * 2
        canvas.height = GRID.ROWS * GRID.SPACING + GRID.MARGIN * 2

        animationContext = {
            ...animationContext,
            canvas,
            ctx: canvas.getContext("2d"),
            particles: initParticles()
        }

        const handleMouseMove = (e) => {
            // Canvas animation calculations
            const canvasRect = canvas.getBoundingClientRect()
            animationContext.mouseX = (e.clientX - canvasRect.left) * (canvas.width / canvasRect.width)
            animationContext.mouseY = (e.clientY - canvasRect.top) * (canvas.height / canvasRect.height)

            // Button position calculations
            const containerRect = container.getBoundingClientRect()
            const x = e.clientX - containerRect.left - (button.offsetWidth / 2)
            const y = e.clientY - containerRect.top - (button.offsetHeight / 2)

            // Apply position
            requestAnimationFrame(() => {
                button.style.position = 'absolute'
                button.style.left = `${x}px`
                button.style.top = `${y}px`
                button.style.transform = 'none'
            })
        }

        container.addEventListener("mousemove", handleMouseMove)
        animate()

        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <>
             <div className="text-center relative overflow-hidden"> 
            <div id="main" className="w-full h-full relative"> 
                <canvas
                    id="myCanvas"
                    className="flex justify-center items-center bg-black w-full h-full mt-[-30px]"
                />
                <div
                    id="main1"
                    className="textBox mx-auto flex justify-center items-center absolute w-full h-full"
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
                            className="cursor relative hover:cursor-pointer basement-bold font-extrabold text-xl text-white w-[230px]"
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

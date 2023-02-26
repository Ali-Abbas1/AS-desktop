import React, { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"

const PartnersNotClients = () => {
    const [position, setPosition] = useState(null)
    const handleScroll = () => {
        let scrollPosition = window.scrollY
        setPosition(scrollPosition)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })
    })
    return (
        <>
            <div className="sticky top-1 border-t-[1px] border-zinc-700 h-[190vh]">
                <div
                    className={`flex w-full justify-between px-20 ${
                        position <= 900 ? "block " : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32`}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                Partners, not Clients
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5 h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                Whatever we do, we take ownership. The good and
                                the bad, and position ourselves as a partner in
                                your success. <br />
                                <br />
                                Growth happens when you ditch the silos. You
                                grow. We grow. Period.
                            </p>
                        </Fade>
                    </div>
                </div>

                <div
                    className={`flex w-full justify-between px-20 ${
                        position >= 901 && position < 1199 ? "block" : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32`}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                People, not Projects
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5 h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                Great things happen when great people come
                                together. Why stop there? Why not go the extra
                                mile? We believe in nurturing meaningful
                                relationships.
                                <br />
                                <br /> You got a problem, we got you. Deadline?
                                call us. Wanna rant? call us. New meme?
                                definitely call us.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div
                    className={`flex w-full justify-between px-20 ${
                        position >= 1200 && position < 1499 ? "block" : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32`}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                in-house, not outsource
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5  h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                We don&#39;t outsource, or sub-contract.
                                Anything we work on has our stamp of approval.
                                If we don&#39;t have the capacity to take on
                                your project with the utmost care. Trust us. We
                                won&#39;t. (Spoiler: Never gonna happen)
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/alphaimage.svg" className="w-full " /> */}
            <div className="bg-[#0E0E0E] w-full min-h-[628px] h-full flex items-center justify-center">
                <svg
                    width={62}
                    height={55}
                    viewBox="0 0 62 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31 16.2494L13.519 46.5179H22.8742L18.4332 54.3091H0L30.6931 0.800165L31 0.265076L31.3069 0.800165L62 54.3091H43.5668L39.1258 46.5179H48.481L31 16.2494Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div
                className={`border-b-[1px] border-b-zinc-700 sticky top-1 h-[150vh] mb-[300px]`}
            >
                <div
                    className={`flex w-full justify-between px-20  ${
                        position <= 2600 ? "block" : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32 `}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                Now, not Later
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5  h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                You need a response on the problem now. We
                                understand. Hit us up and you&#39;ll get you a
                                response in 5 minutes, not 5 business days.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div
                    className={`flex w-full justify-between px-20  ${
                        position > 2601 && position <= 2900 ? "block" : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32`}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                Lean, not mean
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5  h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                Dominic Toretto isn&#39;t the only one who&#39;s
                                got a tight-knit family. W&#39;re in the same
                                boat. The same lot at it for more than 7 years.
                            </p>
                        </Fade>
                    </div>
                </div>
                <div
                    className={`flex w-full justify-between px-20   ${
                        position > 2901 && position <= 3599 ? "block" : "hidden"
                    }`}
                >
                    <div className={`max-w-[770px] w-full pt-32 `}>
                        <Fade triggerOnce>
                            <h2 className="basement-bold font-extrabold text-4xl leading-[46.8px] text-white uppercase">
                                Great, not Good
                            </h2>
                        </Fade>
                    </div>
                    <div className="border-l-[1px] border-zinc-700" />
                    <div
                        className={`max-w-[768px] w-full pt-32 pb-[160px] pl-5 h-[150vh]`}
                    >
                        <Fade triggerOnce>
                            <p className="font-Archivo font-normal text-3xl leading-[45px] text-zinc-400  ">
                                We used to think that getting shit done was all
                                it takes. We learned that it&#39;s actually the
                                last 20% that gets you 80% of the results. The
                                difference between good and great.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnersNotClients

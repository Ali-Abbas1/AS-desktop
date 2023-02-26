import React from "react"
import { useInView } from "react-intersection-observer"
const Consultation = () => {
    // Intersection observer Api for line animations
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <>
            <div className="bg-black boxes" ref={ref}>
                <div className="relative ">
                    <div className={`flex w-full ${inView ? "box2" : ""}`}>
                        <div
                            className={`text-left pt-20 pl-20 min-w-[50%] pb-[312px] ${
                                inView ? "box14" : ""
                            }`}
                        >
                            <h2 className="font-Archivo font-semibold text-6xl leading-[60px] text-zinc-300">
                                350+
                            </h2>
                            <p className="font-Archivo text-zinc-400 font-light text-xl leading-5 pt-2">
                                Partners
                            </p>
                        </div>
                        <div
                            className={`text-right pt-20 pr-20 min-w-[50%] pb-[312px] ${
                                inView ? "box4 box15" : ""
                            }`}
                        >
                            <h2 className="font-Archivo font-semibold text-6xl leading-[60px] text-zinc-300">
                                900,000+
                            </h2>
                            <p className="font-Archivo text-zinc-400 font-light text-xl leading-5 pt-2">
                                People impacted
                            </p>
                        </div>
                    </div>
                    <div className={`flex w-full ${inView ? "box3" : ""}`}>
                        <div className="pl-20 pb-20 pt-[312px] min-w-[50%]">
                            <h2 className="font-Archivo font-semibold text-6xl leading-[60px] text-zinc-300">
                                90%
                            </h2>
                            <p className="font-Archivo font-light text-xl leading-5 text-zinc-400 pt-2">
                                Partner Retention
                            </p>
                        </div>
                        <div
                            className={`pr-20 pb-20 pt-[312px] min-w-[50%] text-right ${
                                inView ? "box13" : ""
                            }`}
                        >
                            <h2 className="font-Archivo font-semibold text-6xl leading-[60px] text-zinc-300">
                                29,000+
                            </h2>
                            <p className="font-Archivo font-light text-xl leading-5 text-zinc-400 pt-2">
                                Hours in the business
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto container relative flex justify-center items-center">
                        <div
                            className={`absolute hover:cursor-pointer top-[-550px] left-[23%] w-[864px] h-[140px] flex justify-center items-center bg-black ${
                                inView ? "box" : ""
                            }`}
                        >
                            <button className=" bg-black flex flex-col justify-center items-center">
                                <span className="font-Archivo font-normal text-2xl leading-6 tracking-[-0.02em] text-center text-zinc-400 pb-5">
                                    Great minds and greater people
                                </span>
                                <span className="basement-bold font-extrabold text-white text-4xl leading-9 tracking-[-0.02em] ">
                                    This is where we meet
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultation

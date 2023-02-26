import React from "react"
import { Fade } from "react-awesome-reveal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"
const HeroSection = () => {
    return (
        <>
            <div className="bg-black pt-[144px]">
                <Fade triggerOnce delay={500}>
                    <div className="flex justify-center items-center relative">
                        <div className="light-box absolute top-[-650px]  w-[563px] h-[563px] z-30 " />
                    </div>
                </Fade>
                <div className="">
                    <Fade delay={900} triggerOnce>
                        <h2 className=" font-Antonio font-extralight text-zinc-400 text-center text-3xl leading-9 tracking-[-0.03em]">
                            BIG OR SMALL
                        </h2>

                        <h2 className="text-white text-center font-Antonio font-bold text-[48px] leading-[67.2px] tracking-[-0.03em] ">
                            THE GREAT NEVER SETTLE FOR GOOD.
                        </h2>
                    </Fade>
                </div>
                <div className="flex flex-col">
                    <Swiper
                        className="mySwiper "
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000 }}
                        loop={{ delay: 1500 }}
                    >
                        <SwiperSlide>
                            <div className="pt-32 flex justify-center">
                                <p className="font-Archivo font-normal text-[32px] leading-[48px] tracking-[-1%] text-center max-w-[810px] text-zinc-400">
                                    AlphaSquad is an excellent design team.
                                    Their quality of work and design skills are
                                    by far the best I&apos;ve found. I&apos;ll
                                    happily be working with AlphaSquad again
                                    soon.
                                </p>
                            </div>
                            <div className=" pt-10">
                                <hr className="mx-auto w-[541px] border-zinc-600" />
                            </div>
                            <div className="text-center pt-8">
                                <h2 className="text-zinc-400 font-Archivo font-normal text-base leading-4 tracking-[-1%]">
                                    Ben Friedman - Chief Revenue Officer
                                </h2>
                            </div>
                            <div className="flex justify-center pt-8">
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/ny-sun.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pt-32 flex justify-center">
                                <p className="font-Archivo font-normal text-[32px] leading-[48px] tracking-[-1%] text-center max-w-[810px] text-zinc-400">
                                    AlphaSquad is an excellent design team.
                                    Their quality of work and design skills are
                                    by far the best I&apos;ve found. I&apos;ll
                                    happily be working with AlphaSquad again
                                    soon.
                                </p>
                            </div>
                            <div className=" pt-10">
                                <hr className="mx-auto w-[541px] border-zinc-600" />
                            </div>
                            <div className="text-center pt-8">
                                <h2 className="text-zinc-400 font-Archivo font-normal text-base leading-4 tracking-[-1%]">
                                    Ben Friedman - Chief Revenue Officer
                                </h2>
                            </div>
                            <div className="flex justify-center pt-8">
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/ny-sun.svg"
                                    alt=""
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="mt-[164px] border-t-zinc-700  border-t-[1px] border-b-zinc-700  border-b-[1px] imgMain">
                    <div className="mx-auto container flex space-x-[90px] items-center justify-center max-w-[70%] my-[50px] bg-black imgDiv">
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/SXM-Logo.svg"
                            alt="sxm"
                            className="fade1 "
                        />
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/GS1.svg"
                            alt="GS1"
                            className="fade2 "
                        />
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/Toyota.svg"
                            alt="toyota"
                            className="fade3 "
                        />
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/Hitachi.svg"
                            alt="hitachi"
                            className="fade4 "
                        />
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/nysun.svg"
                            alt="NYsun"
                            className="fade5 "
                        />
                        <img
                            src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/SCTE.svg"
                            alt="SCTE"
                            className="fade6 "
                        />
                    </div>
                    <div className="flex justify-center items-center relative">
                        <div className="absolute top-[-94px] mx-auto container flex space-x-[90px] items-center justify-center max-w-[70%] img2Div">
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/GS1.svg"
                                alt="GS1"
                                className="fade11  "
                            />
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/nysun.svg"
                                alt="nysun"
                                className="fade12  "
                            />
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/SCTE.svg"
                                alt="SCTE"
                                className="fade13  "
                            />
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/Toyota.svg"
                                alt="Toyota"
                                className="fade14  "
                            />
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/Hitachi.svg"
                                alt="Hitachi"
                                className="fade15 "
                            />
                            <img
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/SXM-Logo.svg"
                                alt="SXM"
                                className="fade16 "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection

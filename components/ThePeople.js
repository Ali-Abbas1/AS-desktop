import React from "react"
import { Fade } from "react-awesome-reveal"
import { useInView } from "react-intersection-observer"
const ThePeople = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <>
            <div className="relative w-full mainDiv">
                {/* image-container */}
                <div className="pb-[161px]">
                    <img
                        src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/people.png"
                        className=" w-full"
                    />

                    {/* <div className="pt-[181px]  px-20">
            <div className="flex justify-center">
              <div className="flex">
                <div className=""><img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/AQ.svg" /></div>
                <div className="pl-8 pt-56 pr-8">
                  <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/saad.svg" />
                </div>
              </div>
              <div className="flex ">
                <div className="relative -top-10">
                  <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/shery.svg" />
                </div>
                <div className="pl-8 pt-60 pr-8 relative top-20">
                  <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/mah.svg" />
                </div>
              </div>
              <div className="flex  ">
                <div className="pt-2">
                  <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/haris.svg" />
                </div>
                <div className="pl-8 pt-[358px] ">
                  <img src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/haris.svg" />
                </div>
              </div>
            </div>
          </div> */}
                    {/* navigation lean ,dream , alpha, team */}
                    {/* <div className="px-20  cursor-pointer pt-28">
            <ul className="flex justify-center  space-x-[59px] items-start">
              <li className="text-white text-8xl uppercase basement-bold ">
                lean/
              </li>
              <li className="text-zinc-400 text-8xl uppercase basement-bold ">
                dream/
              </li>
              <li className="text-zinc-400  text-8xl uppercase basement-bold ">
                alpha/
              </li>
              <li className="text-white text-8xl uppercase basement-bold ">
                team
              </li>
            </ul>
          </div> */}
                </div>
                <div className="relative pb-[332px] min-h-[1475px] max-w-[1920px] mx-auto flex justify-center items-center">
                    <svg
                        ref={ref}
                        xmlns="http://www.w3.org/2000/svg"
                        width={203}
                        height={1402}
                        viewBox="0 0 203 1402"
                        fill="none"
                        className="top-0"
                        id="animationDiv"
                    >
                        <defs>
                            <path
                                d="M31.5 22C115.667 155.667 261.6 451.5 172 565.5C60 708 -35 784 31.5 991.5C98 1199 145.5 1233 73 1377.5"
                                id="path1"
                                className="dashedLine"
                            />
                            <mask id="mask1">
                                <use
                                    className={`${inView ? "mask" : ""}`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth={4}
                                    strokeDasharray={1500}
                                    strokeDashoffset={1500}
                                    xlinkHref="#path1"
                                ></use>
                            </mask>
                        </defs>
                        <use
                            className="paths"
                            fill="none"
                            stroke="white"
                            strokeDasharray={22}
                            strokeWidth={4}
                            xlinkHref="#path1"
                            mask="url(#mask1)"
                        ></use>

                        <circle
                            cx={24}
                            cy="763.5"
                            r="23.5"
                            fill="black"
                            stroke="white"
                        />
                        <circle
                            cx={33}
                            cy={24}
                            r="23.5"
                            fill="black"
                            stroke="white"
                        />
                        <circle
                            cx={72}
                            cy="1377.5"
                            r="23.5"
                            fill="black"
                            stroke="white"
                        />
                    </svg>

                    <Fade
                        className="max-w-[468px] absolute top-[-8px] left-[135px]"
                        triggerOnce
                        delay={2000}
                    >
                        <div>
                            <p className="font-Archivo font-thin text-2xl leading-9 text-zinc-400">
                                In the beginning
                            </p>
                            <h2 className="basement-bold font-extrabold text-2xl leading-9 text-white pt-3">
                                Two guys. Infinite cups of coffee. A couple of
                                laptops and a sloppy internet connection.
                            </h2>
                        </div>
                    </Fade>
                    <Fade
                        className="max-w-[519px] absolute top-[729.37px] right-[256px]"
                        triggerOnce
                        delay={3400}
                    >
                        <div>
                            <p className="font-Archivo font-thin text-2xl leading-9 text-zinc-400">
                                In the Middle
                            </p>
                            <h2 className="basement-bold font-extrabold text-2xl leading-9 text-white pt-3">
                                Two guys. Plus more guys. Plenty of curveballs,
                                lots of learning. Some screw-ups along the way.
                            </h2>
                        </div>
                    </Fade>
                    <Fade
                        className="max-w-[519px] absolute top-[1280px] left-[127px]"
                        triggerOnce
                        delay={2500}
                    >
                        <div>
                            <p className="font-Archivo font-thin text-2xl leading-9 text-zinc-400">
                                Not the end
                            </p>
                            <h2 className="basement-bold font-extrabold text-2xl leading-9 text-white pt-3">
                                Two guys. A relationship-first agency. Friends
                                with Fortune 500. Meme competition with the
                                clients.
                            </h2>
                        </div>
                    </Fade>
                </div>
                <div className="pt-[332px] text-zinc-400 basement-bold font-extrabold text-[96px] leading-[96px] text-center">
                    <h2>THE ALPHAS</h2>
                </div>
                <div className="pt-[109px]">
                    <div className="w-full flex border-y-[1px] border-y-zinc-700">
                        <div className="mx-auto container min-w-[50%] flex flex-col justify-center pt-[156px] items-center">
                            <img
                                className="h-full max-h-[407px] opacity-100 hover:opacity-0 transition ease-out duration-200 z-20"
                                src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/Bear.svg"
                            />
                            <div className="absolute top-[102px] z-50">
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/saad.svg"
                                    className="w-[471px] h-full hover:opacity-100 opacity-0 transition-all ease-in duration-300 "
                                />
                            </div>
                            <h2 className="basement-bold font-extrabold text-3xl leading-[30px] text-white pt-[76px] pb-[50px]">
                                I bear a charmed life.
                            </h2>
                        </div>

                        <div className="mx-auto container min-w-[50%] text-left pl-12 border-l-[1px] flex flex-col justify-between border-l-zinc-700">
                            <div>
                                <h2 className="basement-bold text-white text-3xl leading-[30px] font-extrabold pt-12 ">
                                    SAAD
                                </h2>
                                <p className="font-Archivo font-thin text-3xl leading-[30px] text-zinc-400 pt-4">
                                    Co-Founder - Creative Director
                                </p>
                                <p className="font-Archivo font-thin text-3xl leading-[150%] text-zinc-400 pt-[59px] max-w-[682px]">
                                    Fan of little details. Curious artist.
                                    Designer. I love creating things with my
                                    hands, co-creating with the nature (cause
                                    nature is my moodboard).{" "}
                                </p>
                            </div>
                            <div className="">
                                <ul className="flex items-center space-x-1 font-Archivo font-thin text-3xl  leading-[30px]  text-white  pb-16">
                                    <li className="cursor-pointer"> Twitter</li>
                                    <li>-</li>
                                    <li className="cursor-pointer">
                                        Instagram
                                    </li>
                                    <li>-</li>
                                    <li className="cursor-pointer">Dribbble</li>
                                    <li>-</li>
                                    <li className="cursor-pointer">LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThePeople

import React from "react"
import { Fade } from "react-awesome-reveal"
const MicroManagement = () => {
    return (
        <>
            <div className="bg-black pt-[200px] pb-[279px] ">
                <div className="mx-auto container flex flex-col justify-center items-center space-y-[95.97px] ">
                    <Fade cascade triggerOnce damping={0.3}>
                        <div className="relative ">
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                micromanagement
                            </h2>
                            <Fade triggerOnce delay={1000}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="img1 absolute top-[-71px]"
                                />
                            </Fade>
                        </div>
                        <div className="relative">
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                boring meetings
                            </h2>
                            <Fade triggerOnce delay={1200}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="absolute top-[-71px] w-[600px] img2"
                                />
                            </Fade>
                        </div>
                        <div className="relative ">
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                stress
                            </h2>
                            <Fade triggerOnce delay={1300}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="absolute top-[-59px] left-[-60px] min-w-[379px] img3"
                                />
                            </Fade>
                        </div>
                        <div>
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                shitty work
                            </h2>
                            <Fade triggerOnce delay={1400}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="absolute top-[-64px] min-w-[470px] left-[-44px] img4"
                                />
                            </Fade>
                        </div>
                        <div className="relative">
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                hand holding
                            </h2>
                            <Fade triggerOnce delay={1500}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="absolute top-[-63px] min-w-[500px] left-[-52px] img5"
                                />
                            </Fade>
                        </div>
                        <div className="relative">
                            <h2 className="basement-bold font-extrabold text-6xl leading-[81px] tracking-[0.01em] text-white">
                                smoke &amp; mirrors
                            </h2>
                            <Fade triggerOnce delay={1800}>
                                <img
                                    src="https://alpha-squad-uploads.s3.amazonaws.com/as-website/images/line.svg"
                                    className="absolute top-[-70px] w-[544px] img6"
                                />
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default MicroManagement

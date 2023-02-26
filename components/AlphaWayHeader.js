import React from "react"

const AlphaWayHeader = () => {
    return (
        <>
            {/* Ripple effect */}
            <div className="pt-[420px] pb-16 ">
                <svg className="w-full h-[1144px] absolute top-[-548px] -z-10">
                    <g stroke="#3f3f46" fill="transparent">
                        <circle cx="50%" cy="100%" r="100">
                            <animate
                                attributeType="CSS"
                                attributeName="opacity"
                                from="0"
                                to="1"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="100"
                                to="199.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="200">
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="200"
                                to="299.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="300">
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="300"
                                to="399.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="400">
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="400"
                                to="499.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="500">
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="500"
                                to="599.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="600">
                            <animate
                                attributeType="CSS"
                                attributeName="opacity"
                                from="1"
                                to=".5"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="600"
                                to="699.8"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle cx="50%" cy="100%" r="700">
                            <animate
                                attributeType="CSS"
                                attributeName="opacity"
                                from=".5"
                                to="0"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeType="CSS"
                                attributeName="r"
                                from="700"
                                to="800"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                </svg>
                <h1 className="font-Archivo text-xl leading-5 font-medium text-center text-zinc-400">
                    THE ALPHA WAY
                </h1>
                <h2 className="basement-bold text-zinc-100 text-[56px] leading-[67.2px] text-center font-extrabold uppercase pt-8">
                    A memo against half-assery
                </h2>
                <div className="flex justify-center items-center z-0 ">
                    <div className="blur-[60px] absolute w-[460px] h-[60px] top-0 rounded-full bg-[#6f6e6e]" />
                </div>
            </div>
        </>
    )
}

export default AlphaWayHeader

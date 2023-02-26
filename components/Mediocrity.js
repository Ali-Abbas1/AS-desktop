import React, { useState } from "react"
const Mediocrity = () => {
    const initialText = "Go Alpha"
    const [name, setName] = useState(initialText)
    return (
        <>
            <div className="bg-black py-[147px]">
                <div className="text-center">
                    <h2 className="text-white text-[56px] leading-[67.2px] basement-bold">
                        MEDIOCRITY WON’T GET YOU THERE...
                    </h2>
                </div>
                <div className="text-center text-zinc-400 pt-10 font-Archivo text-2xl leading-9 font-normal">
                    <p>
                        It’s the last 20% that gets 80% of the results.
                        <br />
                        That’s why most companies might be good - but not great.
                    </p>
                </div>
                <div className="text-center italic text-zinc-100 font-Archivo font-light tracking-[-2%] text-xl leading-[30px] pt-12">
                    <p>Why settle for mediocore?</p>
                </div>
                <div className="flex justify-center pt-12">
                    <button
                        className="italic hover:bg-black hover:text-white font-Archivo font-normal text-2xl leading-6 py-7 w-[416px] bg-white text-black border-[1px] border-zinc-100"
                        onMouseOver={() => setName("F*** Mediocrity!")}
                        onMouseLeave={() => setName(initialText)}
                    >
                        {name}
                    </button>
                </div>
                {/* <hr className="border-zinc-700 h-[1px] mt-[147px]" /> */}
            </div>
        </>
    )
}

export default Mediocrity

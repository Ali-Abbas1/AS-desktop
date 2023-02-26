import React from "react"

const LetsTalk = () => {
    return (
        <div className="pt-[108px] pb-[285px]">
            <div className="mx-auto container pl-20">
                <h2 className="basement-bold font-extrabold text-zinc-100 text-[56px] leading-[67.2px] uppercase">
                    houston! we have a problem!
                </h2>
                <p className="font-Archivo font-normal text-2xl leading-9 max-w-[645px] text-zinc-400 pt-5">
                    Let&apos;s hop on a call and do this. Best thing? We
                    won&apos;t be asking for morning cuddles after.
                </p>
            </div>
            <div className="flex justify-center pt-[57px]">
                <form>
                    <div className="roles flex items-center pb-[35px] pt-[58px]">
                        <input
                            type="radio"
                            name="role"
                            defaultValue="ONE"
                            id="one"
                            className="w-[14px] h-[14px] rounded-full outline-none border-[2px] border-solid border-white mr-2 checked:before:bg-white checked:border-white before:block before:w-3/5 before:h-3/5 before:my-[20%] before:mx-auto before:rounded-full appearance-none"
                        />
                        <label
                            className="role text-base leading-4 font-Archivo font-medium text-white "
                            htmlFor="one"
                        >
                            Design
                        </label>
                        <input
                            type="radio"
                            name="role"
                            defaultValue="TWO"
                            id="two"
                            className="w-[14px] h-[14px] rounded-full outline-none border-[2px] border-solid border-white ml-12 mr-2  checked:before:bg-white  checked:border-white before:block  before:w-3/5 before:h-3/5 before:my-[20%] before:mx-auto before:rounded-full appearance-none"
                        />
                        <label
                            className="role text-base leading-4 font-Archivo font-medium text-white"
                            htmlFor="two"
                        >
                            Development
                        </label>
                    </div>
                    <div className="flex flex-col pt-[35px]">
                        <div className="flex space-x-8">
                            <div className=" text-white w-full">
                                <label className="flex flex-col pb-3 font-Archivo ">
                                    First name
                                </label>
                                <input
                                    type="name"
                                    placeholder="Michael"
                                    className="placeholder:text-zinc-600 placeholder:font-Archivo bg-black border-[1px] border-gray-300 py-3 px-4 text-white"
                                />
                            </div>
                            <div className="text-white">
                                <label className="flex flex-col pb-3  font-Archivo">
                                    Last name
                                </label>
                                <input
                                    type="name"
                                    placeholder="Scott"
                                    className="placeholder:text-zinc-600 placeholder:font-Archivo bg-black border-[1px] border-gray-300 py-3 px-4 text-white"
                                />
                            </div>
                        </div>
                        <div className="pt-6">
                            <label className="flex flex-col text-white pb-3 font-Archivo">
                                Email
                            </label>
                            <input
                                type="Email"
                                placeholder="Your@company.com"
                                className="placeholder:text-zinc-600 bg-black border-[1px] border-gray-300 py-3 px-4 w-full text-white"
                            />
                        </div>
                        <div className="pt-6 w-full">
                            <label className="flex flex-col text-white pb-3  font-Archivo">
                                Company
                            </label>
                            <input
                                type="Email"
                                placeholder="Dunder Mifflin"
                                className="placeholder:text-zinc-600 placeholder:font-Archivo bg-black border-[1px] border-gray-300 py-3 px-4 w-full text-white"
                            />
                        </div>
                        <div className="pt-6 w-full">
                            <label className="flex flex-col text-white pb-3  font-Archivo">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                cols={4}
                                placeholder="Please get Dwight Schrute out of my ass. Also, I hope aliens invade us and I would gladly die only if they promise to take Toby away."
                                className="placeholder:text-zinc-600 placeholder:font-Archivo bg-black border-[1px] border-gray-300 py-3 px-4 w-full font-Archivo text-white"
                            />{" "}
                        </div>{" "}
                        <div className="pt-6 w-full space-x-3 ">
                            <span>
                                <input
                                    type="Checkbox"
                                    id="checkbox"
                                    className="placeholder:text-zinc-600 placeholder:font-Archivo bg-black text-white"
                                />
                                <label
                                    className=" text-white font-Archivo "
                                    htmlFor="checkbox"
                                >
                                    {" "}
                                    You agree to our friendly{" "}
                                    <span className="border-b-[1px] border-b-white hover:cursor-pointer font-Archivo">
                                        {" "}
                                        privacy policy.{" "}
                                    </span>{" "}
                                </label>
                            </span>
                        </div>
                        <div className="pt-6 w-full space-x-3 ">
                            <button
                                type="submit"
                                className="bg-black border-[1px] text-white px-[186px] py-3 font-Archivo"
                            >
                                Send Message{" "}
                            </button>{" "}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LetsTalk

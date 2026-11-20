import GetData from "./getData"
import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    // const URL = "https://api.github.com/users/Avik3434"
    // // const URL = "https://api.github.com/users/hiteshchoudhary"
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     GetData(URL).then((result) => {
    //         setData(result)
    //     })
    // }, []);

    // if (!data) {
    //     return <p>Loading data...</p>
    // }

    const data = useLoaderData()
    if (data !== null) {
        return (
            <div className="min-h-screen bg-white text-black px-5 py-12 flex items-center justify-center">

                <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-black/5">

                    <div className="h-1.5 bg-[#FF2638]"></div>

                    <div className="bg-white px-8 py-10 md:px-12">
                        <p className="text-[#D9230F] text-sm font-semibold uppercase tracking-[4px]">
                            Developer Profile
                        </p>

                        <h1 className="text-3xl md:text-5xl font-bold text-black mt-3">
                            GitHub <span className="text-[#FF2638]">Profile.</span>
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Explore developer information and account statistics.
                        </p>
                    </div>

                    <div className="p-7 md:p-12 bg-[#F8F9FA]">

                        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">

                            <div className="flex flex-col items-center text-center">

                                <div className="relative">
                                    <div className="absolute -inset-2 rounded-full bg-[#FF2638]/10"></div>

                                    <div className="relative rounded-full border-[5px] border-[#FF2638] p-1.5 bg-white shadow-lg">
                                        <img
                                            src={data.avatar_url}
                                            alt="GitHub profile"
                                            className="w-52 h-52 rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-2xl font-bold text-black">
                                        {data.login}
                                    </h2>
                                </div>

                                <a
                                    href={`https://github.com/${data.login}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 w-full flex items-center justify-center gap-2 bg-[#FF6A4D] text-white px-5 py-3.5 rounded-xl font-semibold shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.25)] hover:bg-[#FF2638] active:scale-[0.98] transition-all duration-300"
                                >
                                    View GitHub Profile
                                    <span>↗</span>
                                </a>

                            </div>

                            <div>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-8 bg-[#FF2638] rounded-full"></div>

                                    <div>
                                        <h2 className="text-xl font-bold text-black">
                                            User Information
                                        </h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#FF2638]/40 hover:shadow-md transition-all duration-300">
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#D9230F]">
                                            User ID
                                        </p>
                                        <p className="text-2xl font-bold text-black mt-4 break-all">
                                            {data.id}
                                        </p>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#FF2638]/40 hover:shadow-md transition-all duration-300">
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#D9230F]">
                                            Name
                                        </p>
                                        <p className="text-xl font-bold text-black mt-4 wrap-break">
                                            {data.name || "Not provided"}
                                        </p>
                                    </div>

                                    <div className="bg-[#FF2638] text-white rounded-2xl p-5 hover:bg-[#D9230F] transition-all duration-300">
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-white/80">
                                            Followers
                                        </p>
                                        <p className="text-4xl font-bold mt-4">
                                            {data.followers}
                                        </p>
                                        <p className="text-sm text-white/80 mt-2">
                                            Followers
                                        </p>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#FF2638]/40 hover:shadow-md transition-all duration-300">
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#D9230F]">
                                            Username
                                        </p>
                                        <p className="text-xl font-bold text-black mt-4 wrap-break">
                                            {data.login}
                                        </p>
                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:col-span-2 hover:border-[#FF2638]/40 hover:shadow-md transition-all duration-300">
                                        <p className="text-xs font-bold uppercase tracking-[2px] text-[#D9230F]">
                                            Biography
                                        </p>
                                        <p className="text-gray-700 leading-7 mt-4">
                                            {data.bio || "This user hasn't added a bio yet."}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )

    }
}

export const getUserDataFromUrl = async () => {
    const response = await fetch("https://api.github.com/users/Avik3434")
    return response.json()
}
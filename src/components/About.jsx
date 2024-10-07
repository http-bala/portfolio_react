import React from 'react'
import about_img from './assets/about_img.png'
import resume from '../components/assets/resume.pdf'

const About = () => {
    return (
        <div className="sm:flex items-center max-w-screen-xl m-auto" id="about">
            <div className="sm:w-1/2">
                <div className="image object-center text-center ">
                    <img src={about_img} />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <h1
                        className="max-w-2xl text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        About
                    </h1>
                    <p className="text-white">
                    Hi, I'm Balakrishna, a full stack developer specializing in web designing and PHP backend development. A graduate of Veer Narmad South Gujarat University in Surat, I balance my tech career with a love for Esports gaming.
                    </p>
                    <a href={resume} download="BalakrishnaCv"><button className='px-5 py-2 font-semibold text-white bg-purple-600 mt-2 rounded'>Download Cv</button></a>
                    <h1
                        className="max-w-2xl text-white mt-3 text-2xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-3xl dark:text-white">
                        Skills
                    </h1>
                    <div className="space-y-3">
                        {/* Progress */}
                        <div>
                            <h2 className='font-bold text-white'>Frontend</h2>
                            <div
                                className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="flex flex-col justify-center rounded-full overflow-hidden bg-purple-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                                    style={{ width: "85%" }}
                                >
                                    85%
                                </div>
                            </div>
                        </div>
                        {/* End Progress */}
                        {/* Progress */}
                        <div>
                            <h2 className='font-bold text-white'>Backend</h2>
                            <div
                                className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="flex flex-col justify-center rounded-full overflow-hidden bg-purple-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                                    style={{ width: "68%" }}
                                >
                                    68%
                                </div>
                            </div>
                        </div>
                        {/* End Progress */}
                        {/* Progress */}
                        <div>
                            <h2 className='font-bold text-white'>Designing</h2>
                            <div
                                className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="flex flex-col justify-center rounded-full overflow-hidden bg-purple-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                            </div>
                        </div>
                        {/* End Progress */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

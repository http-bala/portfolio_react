import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jd4euyn', 'template_nhyhdnq', form.current, {
        publicKey: 'UGjpjGPs40x0swCpo',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(
            'Your message has been sent successfully. I will get back to you as soon as possible.'
          )
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className='max-w-screen-xl m-auto' id="contact">
            <section className=" text-white " id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-white dark:text-purple-200">
                                Contact
                            </p>
                            <h2 className="font-heading mb-4  font-extrabold leading-none tracking-tight text-white dark:text-white text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-white ">
                                    I'm Balakrishna kolla, a full-stack web developer and designer with a passion for turning ideas into beautiful and functional websites. I bring a unique blend of technical expertise and creative vision to every project.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                                                Our Address
                                            </h3>
                                            <p className="text-white ">
                                                Preal residency 1Floor Near Jalaram Temple
                                            </p>
                                            <p className="text-white ">
                                                Bhimpore Nani Daman-396210
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2" />
                                                <path d="M15 3a6 6 0 0 1 6 6" />
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                                                Contact
                                            </h3>
                                            <a href="tel:8154954408"><p className="text-white ">
                                                Mobile: +91 81549 54408
                                            </p></a>
                                            <a href="mailto:balakrishnakolla00014@gmail.com?subject=Inquery%20for%20Website%20Development"><p className="text-white ">
                                                Mail: Balakrishnakolla@gmail.com
                                            </p></a>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-purple-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="0 0 308 308" xml:space="preserve">
                                                <g id="XMLID_468_">
                                                    <path fill='#ffffff' id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z" />
                                                    <path fill='#ffffff' id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-white">
                                                Direct message
                                            </h3>
                                            <p className="text-white ">
                                                <a href="https://wa.me/8154954408?text=I'm%20inquiring%20about%20the%20Website%20development%20listing,%20I'came%20From%20your%20website" className="text-purple-400 hover:underline mx-1">
                                                    Click To Contact
                                                </a>
                                            </p>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                                    Ready to Get Started?
                                </h2>
                                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="name"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    placeholder="Your name"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-purple-900 sm:mb-0"
                                                    name="from_name"
                                                />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    placeholder="Your email address"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-purple-900 sm:mb-0"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="textarea"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            />
                                            <textarea
                                                id="textarea"
                                                name="message"
                                                cols={30}
                                                rows={5}
                                                placeholder="Write your message..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  text-purple-900 sm:mb-0"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="w-full bg-purple-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
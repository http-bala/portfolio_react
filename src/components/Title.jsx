import React from 'react'

const Title = (props) => {
    return (
        <div className='items-center max-w-screen-xl m-auto my-8'>
            <h1
                className="max-w-2xl text-white mb-4 text-4xl text-center m-auto font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                {props.name}
            </h1>
        </div>
    )
}

export default Title
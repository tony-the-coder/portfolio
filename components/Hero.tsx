import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


// TODO #2: Refactor the hero component to use the new Spotlight component and ensure it is responsive and visually appealing across different screen sizes and review the black-100 is not working as expected
// TODO #3: Ensure the hero section is accessible and follows best practices for web development, including semantic HTML and ARIA attributes where necessary
// TODO #4: Add a loading state to the hero section to improve user experience while the page is loading


const hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                {/* The latest Aceternity has an automatic CLI npx shadcn@latest add https://ui.aceternity.com/registry/spotlight.json
            thankfully!!! */}
                <Spotlight className='-top-40 -left-10 md:-left:32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 md:-left:32 h-[80vh] w-[50vw]' fill="blue" />
            </div>

            {/* Acerternity Grid Background Hero Section */}

            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

            </div>
            <div className='flex justify-center relative my-20 z-10'>

                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic with Next.js
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words="Transforming Concepts into Seamless User Experiences" />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Tony a Next.JS developer based in the US.
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="Showcase My Work"
                            icon={<FaLocationArrow />}
                            position="right"

                        />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default hero
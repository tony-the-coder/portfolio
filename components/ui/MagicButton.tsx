import React from 'react'
// TODO #5: Review why the button color is purple right now and ensure it matches the design system and be transparent
// TODO #6: Ensure the button is accessible and follows best practices for web development, including semantic HTML and ARIA attributes where necessary



const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {

    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;

}) => {
    return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-flgbg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} relative z-10`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton
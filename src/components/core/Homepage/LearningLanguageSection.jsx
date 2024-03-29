import React from 'react'
import HighlighText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import CTAButton from "./Button";


const LearningLanguageSection = () => {
    return (
        <div className="mt-[130px] mb-[100px]">
            <div className="flex flex-col gap-5 items-center">
                <div className="text-4xl font-semibold text-center ">
                    Your Swiss Knife for
                    <HighlighText text={"Learning ant language"} />
                </div>

                {/* div for subheading */}

                <div className="text-center text-richblack-600 mx-auto text-base w-[70%]">
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-5 flex flex-col items-center justify-center gap-2">
                    <img src={know_your_progress}
                        alt="know your progress image"
                        className="object-contain -mr-32"
                    />
                    <img src={compare_with_others}
                        alt="know your progress image"
                        className="object-contain"
                    />
                    <img src={plan_your_lessons}
                        alt="know your progress image"
                        className="object-contain -ml-36"
                    />

                </div>
                    <div className="w-fit ">
                        <CTAButton active={true} linkto={"./signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>
            </div>
        </div>
    )
}

export default LearningLanguageSection
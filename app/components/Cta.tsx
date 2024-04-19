import Image from "next/image";
import Arrow from "../../public/assets/arrow.png"

export default function Cta(){
return (
<div
    className="lg:py-[89px] lg:px-[324px] lg:my-[60px] text-center py-[56px] px-[32px] w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
    <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px]"> Monitor your website like a pro </h1>
    <p className="text-white pt-6 l:pt-[48px] lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency!</p>

    <div className="gap-x-[40px] lg:mt-[56px] lg:flex-row lg:justify-center mt-[40px] flex flex-col w-full items-center">
        <button className="font-medium w-fit text-pink-500 py-[16px] px-[32px] bg-white rounded-[4px]">Try for free</button>
        <button className="lg:mt-0 lg:w-fit text-white font-medium flex w-full items-center justify-center gap-x-3 mt-[32px]">Contact Sales <span><Image src={Arrow} alt="" /></span></button>
    </div>

</div>
)
}
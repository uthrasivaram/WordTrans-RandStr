import {
  BrainCircuit,
  ChevronDown,
  Cpu,
  Sparkles,
} from "lucide-react";
import CourseForm from "./CourseForm";

function Hero() {
  return ( 
  <section className="flex flex-col bg-[linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(10, 10, 56, 1) 35%, rgba(5, 8, 20, 1) 100%)] px-5 pb-20">
  <div className="mx-auto flex w-full flex-col lg:flex-row gap-10 lg:gap-20">

    {/* LEFT SIDE */}
    <div
      className="relative flex min-h-[650px] flex-1 flex-col items-center  overflow-hidden"
      style={{
         backgroundColor: "transparent",
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0) 72%,
            rgba(0,0,0,0.55) 88%,
            rgba(0,0,0,0.8)
          ),
          url("https://files.codingninjas.in/hand-1773832735.webp")
        `,
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center 45px",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >

      
  
  {/* Pill */}
  <div className="top-7 z-20 flex items-center gap-[10px] rounded-[20px] border border-[#603c2f] bg-[rgba(97,36,13,0.2)] px-4 py-2 backdrop-blur-[10px]">
    <span className="whitespace-nowrap text-sm text-white">
      Ready to 10X your career!
    </span>
  </div>
 

      {/* Heading */}
      <h1 className="mt-6 bg-gradient-to-b from-white to-[#2a60de] bg-clip-text text-center text-[52px] font-extrabold leading-[66px] text-transparent">
        Give your career an unfair AI advantage
      </h1>

      {/* Tools */}
      <div className="mt-auto pb-8 text-center">
        <h2 className="mb-5 text-base font-bold text-white">
          The right AI tools integrated into your curriculum
        </h2>

        <div className="flex justify-center gap-6 text-white">
          <span>crewAI</span>
          <span>PyTorch</span>
          <span>Hugging Face</span>
          <span>Keras</span>
        </div>
      </div>
    </div>

    {/* RIGHT FORM */}
    <div className="w-full lg:w-[380px]">
      {/* Course form */}
      <CourseForm />
    </div>

  </div>
</section> 
  );
}
 
export default Hero;
import RightSection from "@/app/components/sections/login/rightSection";
import LeftSection from "@/app/components/sections/login/leftSection";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center p-5 w-full min-h-screen bg-[#15614b]">
      <div className="bg-white w-full max-w-[1000px] h-auto lg:h-[550px] rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
}
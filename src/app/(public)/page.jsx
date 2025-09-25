import LeftSection from "@/app/components/sections/login/leftSection";
import RightSection from "@/app/components/sections/login/rightSection";

export const metadata = {
  title: "Login Page | DingDong",
};

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center p-5 w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-[1000px] h-auto lg:h-[550px] border border-gray-200 rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        <RightSection />
        <LeftSection />
      </div>
    </div>
  );
}
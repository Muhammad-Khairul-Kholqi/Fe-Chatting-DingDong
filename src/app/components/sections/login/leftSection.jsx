import Link from "next/link";
import Input from "@/app/components/elements/input";

export default function LeftSection() {
    return (
        <div className="w-full lg:w-1/2 p-8 bg-white flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-[400px]">
                <div>
                    <h1 className="text-xl font-semibold">Selamat datang di DingDong</h1>
                    <p className="text-gray-600 text-sm mt-1 font-medium">
                        Masuk untuk mulai percakapan asik bersama teman Anda
                    </p>
                </div>

                <form action="" className="mt-10">
                    <Input
                        label="Username"
                        placeholder="Masukkan username"
                        required={true}
                        iconName="User"
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Masukkan password"
                        required={true}
                        iconName="Lock"
                        showPasswordToggle={true}
                    />

                    <button className="w-full bg-[#29616D] hover:bg-[#29616D]/90 text-white font-semibold py-2 px-4 rounded-md mt-4 transition-colors cursor-pointer">
                        Masuk
                    </button>

                    <div className="mt-4 text-start">
                        <p className="text-gray-600">
                            Belum punya akun?{" "}
                            <Link
                                href="/registration"
                                className="text-[#29616D] font-medium hover:underline"
                            >
                                Daftar
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

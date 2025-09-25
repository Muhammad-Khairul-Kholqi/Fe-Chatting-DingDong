import Link from "next/link";
import Input from "@/app/components/elements/input";

export default function LeftSection() {
    return (
        <div className="w-full lg:w-1/2 p-5 lg:p-8 bg-white flex items-center justify-center order-2 lg:order-1">
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
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Masukkan password"
                        required={true}
                    />

                    <button className="w-full bg-[#29616D] hover:bg-[#29616D]/80 text-white font-semibold py-2 px-4 rounded-md mt-4 transition-colors cursor-pointer">
                        Sign In
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm font-medium">
                            Atau login dengan
                        </span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 cursor-pointer text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Google
                    </button>

                    <div className="mt-4 text-start">
                        <p className="text-sm text-gray-600">
                            Belum punya akun?{" "}
                            <Link
                                href=""
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

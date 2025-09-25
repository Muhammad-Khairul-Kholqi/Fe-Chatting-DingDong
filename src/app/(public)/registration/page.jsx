import MainLogo from "@/app/assets/mainLogo.png";
import Image from "next/image";
import Link from "next/link";
import Input from "@/app/components/elements/input";

export default function RegistrationPage() {
  return (
    <div className="flex justify-center items-center p-5 min-h-screen">
          <div className="w-full max-w-[450px] h-auto rounded-3xl p-3 bg-[#F5F5F5]">
            <div className="bg-white border border-gray-200 shadow-md w-full p-8 rounded-2xl flex items-center justify-center">
                <div>
                    <div className="flex justify-center">
                        <Image
                            src={MainLogo}
                            alt="Main Logo"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2">Bergabung dengan Kami</h1>
                        <p className="text-gray-600 mb-6">Daftarkan akun Anda untuk mulai menggunakan platform kami.</p>
                    </div>

                      <form action="" className="mt-5">
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
                            Daftar
                          </button>
                      </form>
                </div>
            </div>
            <div className="text-center text-gray-600 mt-4 mb-2">
                <p className="text-gray-600">
                    Sudah punya akun?{" "}
                    <Link
                        href="/"
                        className="text-[#29616D] font-medium hover:underline"
                    >
                        Masuk
                    </Link>
                </p>
            </div>
        </div>
    </div>
  );
}
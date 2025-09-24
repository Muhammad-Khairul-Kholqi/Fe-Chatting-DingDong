export default function LeftSection() {
    return (
        <div className="w-full lg:w-1/2 p-10 lg:p-8 bg-[#01020A] flex items-center justify-center order-2 lg:order-1">
            <div>
                <div className="text-white">
                    <h1 className="text-xl font-semibold">Selamat datang di DingDong</h1>
                    <p className="text-gray-300 text-sm mt-1">Sign in untuk mulai percakapan asik bersama teman</p>
                </div>

                <form action="" className="mt-10">
                    <div>
                        <label className="text-gray-400">Username<span className="text-red-400">*</span></label>
                        <input 
                            type="text"     
                            className="w-full border border-gray-500 :placeholder-gray-400 rounded-md mt-2 px-3 py-2 bg-transparent text-white outline-none"
                            placeholder="Masukkan username"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="text-gray-400">Password<span className="text-red-400">*</span></label>
                        <input
                            type="text"
                            className="w-full border border-gray-500 :placeholder-gray-400 rounded-md mt-2 px-3 py-2 bg-transparent text-white outline-none"
                            placeholder="Masukkan password"
                        />
                    </div>

                    <button className="w-full bg-[#29616D] hover:bg-[#29616D]/80 text-white font-semibold py-2 px-4 rounded-md mt-6 transition-colors cursor-pointer">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
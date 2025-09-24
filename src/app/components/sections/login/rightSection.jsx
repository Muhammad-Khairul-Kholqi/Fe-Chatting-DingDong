'use client'

import { useState, useEffect } from "react"
import Image from "next/image";
import BackgroundLeft from "@/app/assets/bgLeftLogin.png";
import MainLogo from "@/app/assets/mainLogo.png";
import {
    SlideIn,
    ScaleIn,
    StaggerContainer,
    StaggerItem,
} from "@/app/components/animations/framerAnimations";
import { motion, AnimatePresence } from "framer-motion";
import SlidderDataLogin from "@/app/data/slidderDataLogin";

export default function RightSection() {
    const slides = [
        {
            title: "Obrolan Cepat & Mudah",
            desc: "Nikmati pengalaman mengobrol yang lancar tanpa hambatan dengan teman-teman Anda.",
        },
        {
            title: "Terhubung Dimana Saja",
            desc: "Akses percakapan Anda kapan pun dan di mana pun hanya dengan sekali sentuh.",
        },
        {
            title: "Aman & Privasi Terjaga",
            desc: "Kami memastikan pesan Anda terenkripsi dan privasi Anda tetap terlindungi sepenuhnya.",
        },
        {
            title: "Berbagi Momen Berharga",
            desc: "Bagikan foto, video, dan kenangan indah dengan keluarga dan sahabat tercinta.",
        },
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full lg:w-1/2 p-5 lg:p-8 flex flex-col justify-between relative order-1 lg:order-2"
            style={{
                backgroundImage: `url(${BackgroundLeft.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px'
            }}>

            <StaggerContainer staggerDelay={0.2} className="text-center text-white mb-8">
                <StaggerItem>
                    <ScaleIn delay={0.3} duration={0.8}>
                        <div className="flex justify-center mb-5">
                            <Image src={MainLogo} alt="Main Logo" width={55} height={55} />
                        </div>
                    </ScaleIn>
                </StaggerItem>

                <StaggerItem>
                    <SlideIn
                        direction="up"
                        delay={0.5}
                        className="mb-4 text-2xl font-bold w-full max-w-[400px] mx-auto bg-gradient-to-r from-white to-[#8DACAD] bg-clip-text text-transparent"
                    >
                        Aplikasi Chat Modern dan Terdepan untuk Generasi Digital
                    </SlideIn>

                </StaggerItem>

                <StaggerItem>
                    <SlideIn direction="up" delay={0.7} className="text-gray-100 drop-shadow-md text-sm lg:text-base leading-relaxed">
                        <span className="block mt-2">Cepat • Aman • Mudah</span>
                    </SlideIn>
                </StaggerItem>
            </StaggerContainer>

            <StaggerItem className="flex-1 flex items-center justify-center mb-4 lg:-mb-22">
                <ScaleIn delay={1} className="relative w-full max-w-lg">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-center"
                        >
                            <div className="p-4 lg:p-6 rounded-2xl lg:rounded-3xl backdrop-blur-lg bg-white/10 border-2 border-white/30 shadow-2xl">
                                <h2 className="text-lg lg:text-xl font-bold text-white mb-3 drop-shadow-lg">
                                    {SlidderDataLogin[current].title}
                                </h2>
                                <p className="text-white/90 text-sm lg:text-base leading-relaxed drop-shadow-md">
                                    {SlidderDataLogin[current].desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </ScaleIn>
            </StaggerItem>

            <StaggerItem>
                <SlideIn direction="up" delay={1.3} className="w-full mt-auto" style={{ minHeight: '20px' }}>
                    <div className="flex justify-between items-center gap-1" style={{ width: '100%' }}>
                        {SlidderDataLogin.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                style={{
                                    flex: 1,
                                    height: '6px',
                                    borderRadius: '9999px',
                                    backgroundColor: current === idx ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (current !== idx) {
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (current !== idx) {
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
                                    }
                                }}
                            />
                        ))}
                    </div>
                </SlideIn>
            </StaggerItem>
        </div>
    )
}
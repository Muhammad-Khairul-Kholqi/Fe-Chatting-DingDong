"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Link, CopyCheck } from "lucide-react";
import { framerAnimations, transitions } from "@/app/components/animations/framerAnimations";
import { useEffect, useState } from "react";

export default function NumberModal({ isOpen, onClose }) {
    const [randomNumber, setRandomNumber] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const num = Math.floor(100000 + Math.random() * 900000);
            setRandomNumber(num);
            setCopied(false);
        }
    }, [isOpen]);

    const handleCopy = () => {
        navigator.clipboard.writeText(randomNumber.toString());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    variants={framerAnimations.fadeIn}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transitions.default}
                >
                    <motion.div
                        className="relative w-[90%] max-w-md bg-white rounded-3xl shadow-xl p-8 text-center"
                        variants={framerAnimations.scaleIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transitions.bouncy}
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-18 h-18 bg-gray-100 rounded-full flex items-center justify-center border-3 border-white">
                            <Link className="w-8 h-8 text-[#29616D]" />
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors border border-gray-200 rounded-full p-2 cursor-pointer"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <h2 className="text-xl font-semibold text-gray-800 mt-8">
                            Nomor Random Anda
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Nomor ini bisa Anda gunakan setelah daftar untuk chattingan
                        </p>

                        <div className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-3 mt-6 border border-gray-200">
                            <span className="font-mono text-lg text-gray-800">
                                {randomNumber}
                            </span>
                            <button
                                onClick={handleCopy}
                                className={`transition-colors cursor-pointer ${copied ? "text-[#29616D]" : "text-gray-500 hover:text-[#29616D]"
                                    }`}
                            >
                                {copied ? (
                                    <CopyCheck className="w-5 h-5" />
                                ) : (
                                    <Copy className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

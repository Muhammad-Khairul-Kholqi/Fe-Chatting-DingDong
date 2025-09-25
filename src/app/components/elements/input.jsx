"use client";
import { useState } from "react";
import * as Icons from "lucide-react"; 
import { Eye, EyeOff } from "lucide-react";

export default function Input({
    label,
    type = "text",
    placeholder,
    required = false,
    iconName, 
    showPasswordToggle = false,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const Icon = iconName ? Icons[iconName] : null;

    return (
        <div className="mt-4 first:mt-0">
            <label className="text-gray-600 text-sm">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative mt-2">
                {Icon && (
                    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                )}

                <input
                    type={inputType}
                    placeholder={placeholder}
                    className={`w-full border border-gray-300 rounded-md placeholder:text-sm px-3 py-2 bg-transparent outline-none ${Icon ? "pl-10" : "pl-3"
                        } ${isPassword && showPasswordToggle ? "pr-10" : "pr-3"}`}
                />

                {isPassword && showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}

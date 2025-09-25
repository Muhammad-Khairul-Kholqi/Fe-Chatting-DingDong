export default function Input({
    label,
    type = "text",
    placeholder,
    required = false,
}) {
    return (
        <div className="mt-4 first:mt-0">
            <label className="text-gray-600 text-sm">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-md placeholder:text-sm mt-2 px-3 py-2 bg-transparent outline-none"
            />
        </div>
    );
}

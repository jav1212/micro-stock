export default function RoundedButton() {
    return (
        <button className="
            flex items-center justify-center
            w-12 h-12 
            bg-[#141414] hover:bg-blue-600 
            text-white text-2xl font-medium
            rounded-full transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        ">
            +
        </button>
    )
}
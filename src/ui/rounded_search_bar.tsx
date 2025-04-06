export default function RoundedSearchBar() {
    return (
        <div className="relative">
            <input
                style={{ padding: "16px", backgroundColor: "#141414" }}
                type="text"
                placeholder="Search..."
                className=" w-72 h-12 
            rounded-full
            focus:outline-none focus:ring-2 
            focus:ring-blue-400 focus:border-transparent
            transition-all duration-200 shadow-sm"
            />

            <div
                className="flex items-center justify-center 
                rounded-full w-10 h-10 bg-[#c2c2c2] 
                hover:bg-blue-600 absolute right-1 
                top-1/2 transform -translate-y-1/2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#141414]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    )
}

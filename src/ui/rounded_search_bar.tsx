import { Search } from "@mui/icons-material";
import RoundedButton from "./rounded_button";


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
                className="flex items-center justify-center rounded-full absolute right-1 
                top-1/2 transform -translate-y-1/2">
                <RoundedButton IconComponent={Search} size={10}/>
            </div>
        </div>
    )
}

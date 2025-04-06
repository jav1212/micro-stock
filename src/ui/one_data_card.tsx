import RoundedButton from "./rounded_button";

export default function OneDataCard() {
    return (
        <div 
            style={{ padding: "16px", backgroundColor:"#141414"}} 
            className=" flex flex-col gap-4 justify-center items-center h-full rounded-3xl">

            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 justify-center items-center">
                    <RoundedButton />
                    <h2>Total Property</h2>
                </div>
                <RoundedButton />
            </div>
            <div className=" flex justify-between items-center w-full">
                <h2 className=" text-3xl">1.500</h2>
                <h2 className=" text-xs">Last month total 1.050</h2>
            </div>
        </div>
    )
}

import { Menu, QueryStats } from "@mui/icons-material";
import RoundedButton from "./rounded_button";
import { SvgIconComponent } from '@mui/icons-material';
import React from "react";

interface OneDataCardProps {
    buttonRounded: React.ReactNode;
    title: string;
}

export default function OneDataCard({ title, buttonRounded }: OneDataCardProps) {
    return (
        <div
            style={{ padding: "16px", backgroundColor: "#141414" }}
            className=" flex flex-col gap-4 justify-center items-center h-full rounded-3xl">

            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 justify-center items-center">
                    {buttonRounded}
                    <h2>{title}</h2>
                </div>
            </div>
            <div className=" flex justify-between items-center w-full">
                <h2 className=" text-3xl">1.500</h2>
                <h2 className=" text-xs">Last month total 1.050</h2>
            </div>
        </div>
    )
}

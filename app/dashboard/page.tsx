import Image from "next/image";
import DashboardLayout from "./layout";
import LOGO from "@/public/LOGO.png";
import RoundedButton from "@/src/ui/rounded_button";
import RoundedSearchBar from "@/src/ui/rounded_search_bar";
import WelcomeCard from "@/src/ui/welcome_card";
import OneDataCard from "@/src/ui/one_data_card";
import PieChartCard from "@/src/ui/pie_chart_card";
import BarChartCard from "@/src/ui/bar_chart_card";
import { AccountBalanceRounded, Inventory, Logout, MonetizationOn, MonetizationOnOutlined, MoneyRounded, Notifications, Settings, Sms, TransferWithinAStation, TransformRounded } from "@mui/icons-material";
import { PeopleAlt } from '@mui/icons-material';
import { ShowChart } from '@mui/icons-material';
import { Cloud } from '@mui/icons-material';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="flex w-full h-full gap-8">

                {/* side menu */}
                <div
                    className="flex flex-col w-fit justify-between items-center rounded-full">

                    {/* logo image */}
                    <div className=" w-12 h-12">
                        <Image
                            src={LOGO}
                            alt="Logo"
                            objectFit="cover" />
                    </div>

                    <div
                        style={{ backgroundColor: "#141414", padding: "6px" }}
                        className="flex flex-col gap-4 rounded-full">
                        <RoundedButton
                            IconComponent={Inventory}
                            tooltipText="Consulta todos los productos"
                        />
                        <RoundedButton IconComponent={PeopleAlt}
                            tooltipText="Consulta todos los vendedores"
                        />
                        <RoundedButton IconComponent={ShowChart}
                            tooltipText="Consulta los reportes generales"
                        />
                        <RoundedButton IconComponent={Cloud} 
                            tooltipText="Carga y descarga información"	
                        />
                        <RoundedButton IconComponent={Settings} 
                            tooltipText="Configura la aplicación"
                        />
                    </div>

                    <RoundedButton 
                        IconComponent={Logout} 
                        tooltipText="Cerrar sesión"
                    />

                </div>

                {/* main content */}
                <div className="flex flex-col h-full w-full gap-8">

                    {/* nav bar */}
                    <div className=" flex w-full h-12 justify-between items-center p-4 rounded-lg">

                        {/* identification card */}
                        <WelcomeCard />

                        {/* rounded buttons */}
                        <div className="flex gap-4">
                            <RoundedSearchBar />
                            <RoundedButton 
                                IconComponent={Sms} 
                                tooltipText="Mensajes directos"
                                />
                            <RoundedButton 
                                IconComponent={Notifications} 
                                tooltipText="Notificaciones del sistema"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between w-full h-full items-center gap-4">
                        {/* Grid 3 columnas */}
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <OneDataCard
                                title="Entradas"
                                buttonRounded={<RoundedButton IconComponent={AccountBalanceRounded} size={10}
                                    tooltipText="Entradas en el mes pasado" />} />
                            <OneDataCard
                                title="Salidas"
                                buttonRounded={<RoundedButton IconComponent={TransformRounded} size={10}
                                    tooltipText="Salidas en el mes pasado" />} />
                            <OneDataCard
                                title="Productos"
                                buttonRounded={<RoundedButton IconComponent={Inventory} size={10}
                                    tooltipText="Cantidad de productos en el mes pasado" />} />
                        </div>

                        {/* Grid 2 columnas con ajuste especial */}
                        <div className="grid grid-cols-5 gap-4 w-full h-full "> {/* Cambiamos a 5 columnas para mayor control */}
                            <div className="col-span-3"> {/* 3/5 ≈ 2/3 del espacio (como en el grid de 3) */}
                                <BarChartCard />
                            </div>
                            <div className="col-span-2"> {/* 2/5 ≈ 1/3 del espacio */}
                                <PieChartCard />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
}
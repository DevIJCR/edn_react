import CloseIcon from "../icons/x.svg";
import AnchorSideBar from "./AnchorSideBar";
import Submenu from "./Submenu";
import { useState } from "react";
import SubmenuSB from "./SubmenuSB";

const submenuLicenciatura = [
    {
        href: '#',
        name: 'Licenciatura en Dietética y Nurición'
    },
    {
        href:'#',
        name:'Alumnos',
    },
]

const submenuPosgrado = [
    {
        href:'#',
        name:'Maestría en Nutrición Clínica',
    }
]

export default function SideBar({handleClick}){

    return (
        <nav className="fixed top-0 bg-black/50 w-full h-full z-10">
            <div className="absolute right-0 top-0 bg-red-ist w-[60%] h-full px-2 py-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-xl font-patria">Menú</h2>
                    <button onClick={handleClick}>
                        <img className="size-9" src={CloseIcon} alt="Icono cerrar menú" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <AnchorSideBar reference={'#'} title={'Conoce la EDN'}/>
                    <SubmenuSB title={'Licenciatura'} anchorList={submenuLicenciatura}/>
                    <SubmenuSB title={'Posgrado'} anchorList={submenuPosgrado}/>
                    <AnchorSideBar reference={'#'} title={'Biblioteca'}/>
                    <AnchorSideBar reference={'#'} title={'Educacion Nutriológica Continua'}/>
                </div>
            </div>
        </nav>
    );
}
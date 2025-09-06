import CloseIcon from "../icons/x.svg";
import AnchorSideBar from "./AnchorSideBar";
import Submenu from "./Submenu";
import { useState } from "react";

export default function SideBar({handleClick}){
    const [activeMenu, setActiveMenu] = useState(0);
    return (
        <nav className="absolute top-0 bg-black/50 w-full h-full z-10">
            <div className="absolute right-0 top-0 bg-red-ist w-[60%] h-full px-2 py-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-xl font-patria">Menú</h2>
                    <button onClick={handleClick}>
                        <img className="size-9" src={CloseIcon} alt="Icono cerrar menú" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <AnchorSideBar reference={'#'} title={'Conoce la EDN'}/>
                    <Submenu onClick={handleActiveMenu} activeMenu={activeMenu} id={1} title={'Licenciatura'} links={submenuLicenciatura}/>
                    <AnchorSideBar reference={'#'} title={'Biblioteca'}/>
                    <AnchorSideBar reference={'#'} title={'Educacion Nutriológica Continua'}/>
                </div>
            </div>
        </nav>
    );
}
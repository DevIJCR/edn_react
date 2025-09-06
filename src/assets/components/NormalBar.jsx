import { act, useState } from "react";
import Submenu from "./Submenu";
import { href } from "react-router";

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

export default function NormalBar(){
    const [activeMenu, setActiveMenu] = useState(0);

    const handleActiveMenu = (id)=>{
        if(activeMenu === id){
            setActiveMenu(0);
        }else{
            setActiveMenu(id);
        }
    }

    return(
        <nav className="items-center px-2 py-2 gap-4 hidden md:flex">
            <a className="text-white font-patria text-sm lg:text-xl" href="#">Conoce la EDN</a>
            <Submenu onClick={()=>handleActiveMenu(1)} activeMenu={activeMenu} id={1} title={'Licenciatura'} links={submenuLicenciatura}/>
            <Submenu onClick={()=>handleActiveMenu(2)} activeMenu={activeMenu} id={2} title={'Posgrado'} links={submenuPosgrado}/>
            <a className="text-white font-patria text-sm lg:text-xl" href="#">Aspirantes</a>
            <a className="text-white font-patria text-sm lg:text-xl" href="#">Biblioteca</a>
            <a className="text-white font-patria text-sm lg:text-xl" href="#">CDN</a>
            <a className="text-white font-patria text-sm lg:text-xl" href="#">Educación Nutriológica Continua</a>
        </nav>
    );
}
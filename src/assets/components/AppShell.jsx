import Logos from "../logos/logos.svg";
import LogosFooter from "../logos/logos-footer.svg";
import ListIcon from "../icons/list.svg";
import { useState } from "react";
import SideBar from "./SideBar";
import FacebookIcon from "../icons/facebook.svg";
import YoutubeIcon from "../icons/youtube.svg";
import TwitterIcon from "../icons/twitter-x.svg";
import InstaIcon from "../icons/instagram.svg";
import NormalBar from "./NormalBar";

export default function AppShell({children}){
    const [sideBarState, setSideBarState] = useState(false);
    function handleClick(){
        if(sideBarState){
            setSideBarState(false);
        }else{
            setSideBarState(true);
        }
    }
    let bar;
    if(sideBarState){
        bar= <SideBar handleClick={handleClick}/>;
    }
    return(
        <>
            <header className="flex items-center justify-center px-2 py-2">
                <img className="h-10" src={Logos} alt="Logos institucionales" />
            </header>
            <div className="bg-red-ist px-2 py-2 flex items-center justify-end md:justify-center h-9">
                <NormalBar/>
                <button onClick={handleClick} type="button" className="md:hidden flex items-center">
                    <img className="size-7" src={ListIcon} alt="Icono de Boton menú" />
                </button>
            </div>
            <div className="w-full bg-black/50">
                {bar}
            </div>
            <main>
                {children}
            </main>
            <footer className="bg-red-ist w-full px-4 py-4 flex flex-col gap-6">
                <div className="flex items-center w-full justify-center">
                    <img className="h-12" src={LogosFooter} alt="Logos institucionales" />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-white font-patria text-xl">Ubicación:</h2>
                    <a className="text-white font-noto underline underline-offset-4 text-center" target="blank" href="https://maps.app.goo.gl/bP9CftoEncHb5YQh6">Callejon Via, Av. San Fernando No. 12, San Pedro Apostol, Tlalpan, 14070 CDMX</a>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white font-patria text-xl">Enlaces EDN</h2>
                    <div className="flex flex-col ">
                        <a className="text-gold-enf-ist font-patria text-center" href="#">Aviso de Privacidad Integral</a>
                        <a className="text-gold-enf-ist font-patria text-center" href="#">Aviso de Privacidad Simplificado</a>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white font-patria text-xl">Enlaces gob.mx</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center ">
                            <h3 className="text-gold-enf-ist font-patria">¿Qué es gob.mx?</h3>
                            <p className="text-white text-center font-noto">Es el portal único de trámites, información y participación ciudadana.</p>
                            <a className="text-gold-enf-ist font-patria underline underline-offset-4" href="#">Leer más</a>
                        </div>
                        <div className="flex flex-col items-center ">
                            <a className="text-gold-enf-ist font-patria" href="">Portal de datos abiertos</a>
                            <a className="text-gold-enf-ist font-patria" href="">Declaración de accesibilidad</a>
                            <a className="text-gold-enf-ist font-patria" href="">Terminos y condiciones</a>
                        </div>
                        <div className="flex flex-col items-center ">
                            <a className="text-gold-enf-ist font-patria" href="">Participa</a>
                            <a className="text-gold-enf-ist font-patria" href="">Marco Juridico</a>
                            <a className="text-gold-enf-ist font-patria" href="">Plataforma Nacional de Transparencia</a>
                            <a className="text-gold-enf-ist font-patria" href="">Transparencia para el pueblo</a>
                            <a className="text-gold-enf-ist font-patria" href="">Alerta</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <a className="text-white font-patria text-xl underline underline-offset-8" href="#">Denuncia Contra servidores publicos</a>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-xl text-white font-patria">Siguenos en las redes sociales:</h2>
                    <div className="flex flex-col items-center ">
                        <h2 className="text-gold-enf-ist font-patria">Redes sociales EDN:</h2>
                        <div className="flex items-center gap-4">
                            <a href="#">
                                <img src={FacebookIcon} alt="Icono Facebook" />
                            </a>
                            <a href="#">
                                <img className="size-5" src={YoutubeIcon} alt="Icono Youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h2 className="text-gold-enf-ist font-patria">Redes sociales gob.mx:</h2>
                        <div className="flex items-center gap-4">
                            <a href="#">
                                <img src={FacebookIcon} alt="Icono Facebook" />
                            </a>
                            <a href="#">
                                <img src={TwitterIcon} alt="Icono Twitter" />
                            </a>
                            <a href="#">
                                <img src={InstaIcon} alt="Icono Instagram" />
                            </a>
                            <a href="#">
                                <img className="size-5" src={YoutubeIcon} alt="Icono Youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
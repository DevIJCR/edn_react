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
    function MainFooterLinks({name, href, target}){
        return(
            <a className="text-white font-noto underline underline-offset-4 text-center" href={href} target={target}>{name}</a>
        );
    }
    function SecondaryFooterLinks({name, href, target}){
        return(
            <a className="text-gold-enf-ist font-patria text-center" href={href} target={target}>{name}</a>
        );
    }
    function ThirdFooterLinks({name, href, target}){
        return(
            <a className="text-gold-enf-ist font-patria underline underline-offset-4" href={href}>{name}</a>
        );
    }
    return(
        <>
            <header className="flex items-center justify-center px-2 py-2 fixed top-0 bg-white w-full h-16 z-10">
                <img className="h-10" src={Logos} alt="Logos institucionales" />
            </header>
            <div className="bg-red-ist px-2 py-2 flex items-center justify-end md:justify-center h-9 fixed top-16 z-10 w-full">
                <NormalBar/>
                <button onClick={handleClick} type="button" className="md:hidden flex items-center">
                    <img className="size-7" src={ListIcon} alt="Icono de Boton menú" />
                </button>
            </div>
            <div className="w-full bg-black/50">
                    {bar}
            </div>
            <main className="mt-24">
                {children}
            </main>
            <footer className="bg-red-ist w-full px-4 py-4 flex flex-col lg:flex-row lg:items-start gap-6 lg:px-6 lg:py-6">
                <div className="flex items-center justify-center">
                    <img className="h-20" src={LogosFooter} alt="Logos institucionales" />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-white font-patria text-xl">Ubicación:</h2>
                    <MainFooterLinks href={'https://maps.app.goo.gl/bP9CftoEncHb5YQh6'} name={'Callejon Via, Av. San Fernando No. 12, San Pedro Apostol, Tlalpan, 14070 CDMX'} target={'blank'}/>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white font-patria text-xl text-center">Enlaces EDN</h2>
                    <div className="flex flex-col ">
                        <SecondaryFooterLinks href={'https://edn.issste.gob.mx/AVISO%20DE%20PRIVACIDAD%20INTEGRAL%20EDN%20ISSSTE.htm'} name={'Aviso de privacidad Integral'} target={'self'}/>
                        <SecondaryFooterLinks href={'https://edn.issste.gob.mx/AVISO%20DE%20PRIVACIDAD%20SIMPLIFICADO.htm'} name={'Aviso de Privacidad Simplificado'} target={'self'}/>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white font-patria text-xl">Enlaces gob.mx</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center ">
                            <h3 className="text-gold-enf-ist font-patria">¿Qué es gob.mx?</h3>
                            <p className="text-white text-center font-noto">Es el portal único de trámites, información y participación ciudadana.</p>
                            <ThirdFooterLinks href={'https://www.gob.mxque-es-gobmx/'} name={'Leer más'} target={'blank'}/>
                        </div>
                        <div className="flex flex-col items-center ">
                            <SecondaryFooterLinks href={'https://datos.gob.mx/'} name={'Portal de datos abiertos'} target={'blank'}/>
                            <SecondaryFooterLinks href={'https://www.gob.mx/accesibilidad'} name={'Declaración de accesibilidad'} target={'blank'}/>
                            <SecondaryFooterLinks href={'https://www.gob.mx/terminos'} name={'Terminos y Condiciones'} target={'blank'}/>
                        </div>
                        <div className="flex flex-col items-center ">
                            <SecondaryFooterLinks href={'http://www.ordenjuridico.gob.mx/'} name={'Marco Jurídico'} target={'blank'}/>
                            <SecondaryFooterLinks href={'https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio'} name={'Plataforma Nacional de Transparencia'} target={'blank'}/>
                            <SecondaryFooterLinks href={'https://transparencia.gob.mx/home.html'} name={'Transparencia para el pueblo'} target={'blank'}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <a className="text-white font-patria text-xl underline underline-offset-8 lg:text-center" href="#">Denuncia Contra servidores publicos</a>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-xl text-white font-patria lg:text-center">Siguenos en las redes sociales:</h2>
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
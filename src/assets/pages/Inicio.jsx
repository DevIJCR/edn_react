import AppShell from "../components/AppShell";
import Carrusel from "../components/Carrusel";
import imagenInicio2 from "../images/oferta2.webp"
import imagenInicio1 from "../images/oferta1.webp";
import TestimonioCard from "../components/TestimonioCard";
import Button from "../components/Button";
import Titulo1 from "../components/Titulo1";
import Titulo3 from "../components/Titulo3";
import Parrafo from "../components/TextComponents";
import { Titulo2 } from "../components/TextComponents.jsx";

export default function Inicio(){
    const imagenes = [
        "./carrusel1.webp",
        "./carrusel2.webp",
        "./carrusel3.webp",
        "./carrusel4.webp",
        "./carrusel5.webp",
        ];
    const imagenes2 = [
        "./diabetes.jpg",
        "./Agenda1.jpg",
        "./Agenda2.jpg",
    ];
    function handleClickButtons(){
        
    }
    return(
        <AppShell>
            <section className="w-full">
                <Carrusel type={'object-cover'} imagenes={imagenes}/>
            </section>
            <section className="border-b border-b-gray-300 w-full bg-white flex flex-col items-center">
                <div className=" bg-white flex flex-col items-center px-4 py-4 gap-6 md:w-[90%]">
                    <div className="flex flex-col items-center mt-6">
                        <Titulo3 text={'Bienvenidos a'}/>
                        <Titulo1 text={'La Escuela de Dietética y Nutrición del ISSSTE'}/>
                        <Parrafo text={'Conoce la oferta educativa que tenemos para ti'}/>
                    </div>
                    <div className="flex gap-4 items-center md:justify-center md:max-w-[85%] md:mt-6 md:gap-6">
                        <img className="rounded-md max-w-48 md:max-w-96" src={imagenInicio1} alt="Imagen de alumno"/>
                        <div className="flex flex-col justify-around h-auto gap-4 md:w-[50%]">
                            <div>
                                <Titulo3 text={'Conoce la'}/>
                                <Titulo2 textTitle={'Licenciatura en Dietética y Nutrición'}/>
                            </div>
                            <Parrafo text={'La Licenciatura en Dietética y Nutrición cuenta con planes de estudio con validez oficial.'}/>
                            <Button text={'Más Información'} handleClick={handleClickButtons}/>
                        </div>
                    </div>
                    <div className=" flex gap-4 items-center md:justify-center md:max-w-[85%] md:mt-6 md:gap-6">
                        <div className="flex gap-4 items-center justify-center">
                            <div className="flex flex-col justify-around gap-4 md:w-[50%]">
                                <div>
                                    <Titulo3 text={'Conoce la'} />
                                    <Titulo2 textTitle={'Maestría en Nutrición Clínica'}/>
                                </div>
                                <Parrafo text={'Formamos maestros en Nutrición Clínica, capaces de generar conocimientos para prevenir y solucionar problemas con la alimentación y nutrición del individuo.'}/>
                                <Button text={'Más información'}/>
                            </div>
                            <img className="rounded-md max-w-48 max-h-64 md:max-w-96 md:max-h-max" src={imagenInicio2} alt="Imagen de alumno"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-b border-b-gray-300">
                <div className="w-full bg-white flex flex-col items-center p-4">
                    <h4 className="text-gold-ist font-bold font-noto text-xs">¿Quieres estudiar con nosotros?</h4>
                    <h2 className="text-3xl font-patria text-black-ist text-center">Contactanos</h2>
                    <form className="flex flex-col gap-4 w-[85%] mt-2" action="#">
                        <input className="border px-2 py-2 rounded-md text-noto" type="text" placeholder="Nombre Completo" />
                        <input className="border px-2 py-2 rounded-md text-noto" type="text" placeholder="Telefono de Contacto" />
                        <input className="border px-2 py-2 rounded-md text-noto" type="text" placeholder="Correo Electronico" />
                        <textarea className="border border-gold-enf-ist p-4 rounded-md" name="plus-info" id="plus-info" placeholder="Escribe aquí ¿Sobre qué deseas obtener información?"></textarea>
                        <button className="bg-green-enf-ist rounded-md px-2 py-1 text-white font-patria">Enviar</button>
                    </form>
                </div>
            </section>
            <section className="border-b border-b-gray-300">
                <div className="w-full bg-white flex flex-col items-center p-4 gap-4">
                    <div>
                        <h4 className="text-gold-ist font-bold font-noto text-xs">Hemos formado decenas de profesionistas de la Nutrición</h4>
                        <h2 className="text-3xl font-patria text-black-ist text-center">Conoce sus historias</h2>
                    </div>
                    <TestimonioCard/>
                    <TestimonioCard/>
                    <TestimonioCard/>
                </div>
            </section>
            <section>
                <div className="w-full bg-white flex flex-col items-center gap-4 p-4">
                    <div className="flex flex-col items-center">
                        <h4 className="text-gold-ist font-bold font-noto text-xs">Conoce más</h4>
                        <h2 className="text-3xl font-patria text-black-ist text-center">Informate</h2>
                    </div>
                    <Carrusel type={'object-contain'} imagenes={imagenes2}/>
                </div>
            </section>
        </AppShell>
    );
}
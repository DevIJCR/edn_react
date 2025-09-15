import AppShell from "../components/AppShell";
import Carrusel from "../components/Carrusel";
import imagenInicio2 from "../images/oferta2.webp"
import imagenInicio1 from "../images/oferta1.webp";
import TestimonioCard from "../components/TestimonioCard";

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
    return(
        <AppShell>
            <section className="w-full">
                <Carrusel type={'object-cover'} imagenes={imagenes}/>
            </section>
            <section className="border-b border-b-gray-300">
                <div className=" bg-white flex flex-col items-center px-4 py-4 gap-6">
                    <div className="flex flex-col items-center">
                        <h3 className="text-base text-gold-ist font-noto font-bold">Bienvenidos a</h3>
                        <h2 className="text-3xl font-patria text-black-ist text-center">La Escuela de Dietética y Nutrición del ISSSTE</h2>
                        <p className="text-gray-500">Conoce la oferta educativa que tenemos para ti.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className="rounded-md max-w-48" src={imagenInicio1} alt="Imagen de alumno"/>
                        <div className="flex flex-col justify-around h-auto gap-4">
                            <div>
                                <h4 className="text-gold-ist font-bold font-noto text-xs">Conoce la</h4>
                                <h2 className="text-black-ist font-patria text-xl">Licenciatura en Dietética y Nutrición</h2>
                            </div>
                            <p className="text-sm text-gray-500 font-noto">La Licenciatura en Dietética y Nutrición cuenta con planes de estudio con validez oficial.</p>
                            <button className="bg-green-enf-ist rounded-md px-2 py-1 text-white font-patria">Más información</button>
                        </div>
                    </div>
                    <div className=" bg-white flex flex-col items-center px-4 py-4 gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="flex flex-col justify-around gap-4">
                                <div>
                                    <h4 className="text-gold-ist font-bold font-noto text-xs">Conoce la</h4>
                                    <h2 className="text-black-ist font-patria text-xl">Maestría en Nutrición Clínica</h2>
                                </div>
                                <p className="text-sm text-gray-500 font-noto text-clip">Formamos maestros en Nutrición Clínica, capaces de generar conocimientos para prevenir y solucionar problemas con la alimentación y nutrición del individuo.</p>
                                <button className="bg-green-enf-ist rounded-md px-2 py-1 text-white font-patria">Más información</button>
                            </div>
                            <img className="rounded-md max-w-48 max-h-64" src={imagenInicio2} alt="Imagen de alumno"/>
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
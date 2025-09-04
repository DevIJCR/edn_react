import AppShell from "../components/AppShell";
import Carrusel from "../components/Carrusel";
import imagenInicio1 from "../images/oferta1.webp";

export default function Inicio(){
    return(
        <AppShell>
            <section className="w-full">
                <Carrusel/>
            </section>
            <section>
                <div className=" bg-white flex flex-col items-center px-4 py-4 gap-6">
                    <div className="flex flex-col items-center">
                        <h3 className="text-base text-gold-ist font-noto font-bold">Bienvenidos a</h3>
                        <h2 className="text-3xl font-patria text-black-ist text-center">La Escuela de Dietética y Nutrición del ISSSTE</h2>
                        <p className="text-gray-500">Conoce la oferta educativa que tenemos para ti.</p>
                    </div>
                    <div className="flex gap-4">
                        <img className="rounded-md max-w-48" src={imagenInicio1} alt="Imagen de alumno"/>
                        <div className="flex flex-col justify-around h-auto">
                            <h4 className="text-gold-ist font-bold font-noto text-xs">Conoce la</h4>
                            <h2 className="text-black-ist font-patria text-xl">Licenciatura en Dietética y Nutrición</h2>
                            <p className="text-sm text-gray-500 font-noto">La Licenciatura en Dietética y Nutrición cuenta con planes de estudio con validez oficial.</p>
                            <button className="bg-green-enf-ist rounded-md px-2 py-1 text-white font-patria">Más información</button>
                        </div>
                    </div>
                </div>
            </section>
        </AppShell>
    );
}
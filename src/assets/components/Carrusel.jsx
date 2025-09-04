import { useState, useEffect } from "react";
import carrusel1 from "../images/carrusel1.webp";
import carrusel2 from "../images/carrusel2.webp";
import carrusel3 from "../images/carrusel3.webp";
import carrusel4 from "../images/carrusel4.webp";
import carrusel5 from "../images/carrusel5.webp";


const imagenes = [
    carrusel1,
    carrusel2,
    carrusel3,
    carrusel4,
    carrusel5,
];

export default function Carrusel(){
    const [index, setIndex] = useState(0);
    const [pausado, setPausado] = useState(false);

    useEffect(()=>{
        if(pausado) return;
        const intervalo = setInterval(()=>{
            setIndex((prevIndex)=>(prevIndex + 1) % imagenes.length);
        },3000);

        return ()=>clearInterval(intervalo);
    }, [pausado]);

    const siguiente = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    };

    const anterior = () => {
        setIndex((prevIndex) =>
        prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
        );
    };

    return(
        <div id="carousel" className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[34rem] overflow-hidden group" onMouseEnter={()=>setPausado(true)} onMouseLeave={()=>setPausado(false)}>
                <div className="absolute inset-0">
                    <img src={imagenes[index]} alt="Slide" className="carousel-slide absolute inset-0 w-full h-full object-cover opacity-100" />
                    <button
                        onClick={anterior}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                    >
                        ◀
                    </button>
                    <button
                        onClick={siguiente}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                    >
                        ▶
                    </button>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {imagenes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full ${
                            i === index ? "bg-white" : "bg-gray-400"
                            }`}
                        ></button>
                    ))}
                </div>
        </div>
    );
}
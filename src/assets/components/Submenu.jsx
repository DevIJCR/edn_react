export default function Submenu({onClick,activeMenu, id, title, links}){

    return(
        <div onClick={onClick} className="relative flex items-center gap-2 group cursor-pointer">
            <h4 className="text-white font-patria text-sm lg:text-xl">{title}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
                <ul className={`transition-all rounded-sm delay-100 absolute top-8 z-10 bg-white w-max ${id === activeMenu?"visible":"invisible group-hover:visible"}`}>
                {links.map((link,i)=>(
                    <li className="px-2 py-1 flex flex-col rounded-sm hover:bg-gray-300" key={i}>
                        <a className="text-black-ist font-noto font-semibold text-sm lg:text-base" href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
import { useState } from "react";

export default function SubmenuSB({title, anchorList}){
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        if(isOpen){
            setIsOpen(false);
        }else{
            setIsOpen(true);
        }
    }
    return(
        <div onClick={handleClick}>
            <div className="flex items-center">
                <h4 className="font-noto text-white">{title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </div>
            <ul className={isOpen?"":"hidden"}>
                {
                    anchorList.map((link,i)=>(
                        <li className="px-2 py-1 flex flex-col rounded-sm hover:bg-gray-300" key={i}>
                            <a className="text-white font-noto text-sm italic" href={link.href}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default function Button({text, handleClick}){
    return(
        <button onClick={handleClick} className="bg-green-enf-ist rounded-md px-2 py-1 text-white font-patria max-w-46 md:h-16 md:text-xl">
            {text}
        </button>
    );
}
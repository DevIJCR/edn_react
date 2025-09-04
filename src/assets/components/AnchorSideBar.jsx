export default function AnchorSideBar({reference, title}){
    return(
        <a className="text-white font-noto text-base" href={reference}>{title}</a>
    );
}
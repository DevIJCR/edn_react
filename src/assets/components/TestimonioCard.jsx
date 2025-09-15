export default function TestimonioCard(){
    return(
        <div className="bg-gray-300 rounded-md font-noto flex flex-col items-center px-4 py-4 gap-6">
            <p className="text-center italic">"Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."</p>
            <div className="flex">
                <img className="rounded-full size-7 object-cover" src="./testimonio.jpg" alt="Imagen de testimonio" />
                <h4>Mónica Ramírez</h4>
            </div>
        </div>
    );
}
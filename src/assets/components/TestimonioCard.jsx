export default function TestimonioCard(){
    return(
        <div className="bg-gray-300 rounded-md font-noto flex flex-col items-center px-4 py-4 gap-6 md:max-w-4xl">
            <p className="text-center italic md:text-xl">"Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam."</p>
            <div className="flex items-center gap-4">
                <img className="rounded-full size-7 md:size-18 object-cover" src="./testimonio.jpg" alt="Imagen de testimonio" />
                <h4 className="md:text-xl">Mónica Ramírez</h4>
            </div>
        </div>
    );
}
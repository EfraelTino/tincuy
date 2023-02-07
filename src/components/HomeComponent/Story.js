import React from 'react';
import farm from '../../images/farm.webp'
import start from '../../images/sstart.webp';

const Story = () => {
    return (
        <section
        className="flex flex-wrap justify-center items-center md:justify-around lg:justify-center gap-16 px-[8%] mt-24 pt-12 pb-8 md:pt-[8rem] bg-white">
        <div className="relative max-w-[550px]">
            <img src={farm}
                className="w-[90%] min-h-[450px] sm:min-h-[700px] md:min-h-[700px] rounded-tl-[100rem] rounded-tr-[25rem] rounded-b-[100rem] shadow-2xl"
                alt="" />
            <span
                className="absolute top-[45%] whitespace-nowrap left-[100%] -translate-x-[100%] text-xl md:text-3xl font-semibold text-white font-serif bg-[rgba(255,255,255,.4)] px-8 py-7 rounded-3xl shadow-2xl backdrop-blur-md">Desde
                2022</span>
        </div>

        <div className="relative max-w-[500px]">
            <img src={start} className="absolute -top-24 ml-[80%]" alt="" />
            <h1 className="font-lato text-4xl md:text-5xl tracking-wider font-extrabold text-center md:text-left">Nuestra historia
            </h1>
            <p className="text-md font-medium max-w-[500px] text-justify  md:text-left mt-12 text-[#8a8a8a] indent-8">
            Una parte importante de nuestra dieta se dedica a los alimentos básicos que provienen del trigo, el arroz, el maíz, las legumbres, la patata, la avena, la mandioca, el sorgo, el mijo, etc. La escala y el alcance de los cultivos agrícolas es clave para alimentar a 9600 millones de personas de forma sostenible para 2050 Sin embargo, primero se debe abordar la falta de calidad y cantidad de proteínas en los productos agrícolas. 
            </p>
            <p className="mt-8 text-md font-medium max-w-[500px] text-justify  md:text-left text-[#8a8a8a] indent-8"> 
            Seccha Comerciantes, aprovechamos el poder de la fermentación para enriquecer los productos agrícolas con proteína completa y hacerlos nutricionalmente balanceados. Nuestra misión es entregar los productos nutritivos de mejor sabor para todos. ocasiones para comer, que sean adecuadas para toda nuestra familia y para el planeta tierra. </p>

            <button className="mt-12 bg-green-500 text-white px-6 py-4  md:px-12 md:py-5 rounded-[50px]">Ver más</button>
        </div>
    </section>
    );
}

export default Story;

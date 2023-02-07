import React from 'react';
import road from '../../images/0_road_in_farm.jpg'
import { BsArrowRightShort } from "react-icons/bs";

const Miles = () => {
    return (
        <section className="px-[8%] py-20 md:py-[5rem] bg-white flex flex-wrap items-center justify-center gap-24">
        <div>
            <h1 className="text-2xl md:text-5xl font-bold max-w-[550px] leading-tight">Miles de personas confían en nuestros servicios comerciales </h1>
            <p className="mt-12 text-[#8e8e8e] font-normal text-2xl max-w-[500px]">Únase al increíble Farmer que ofrecemos para ti y solo para ti </p>

            <div
                className="mt-12 py-3 pl-8 bg-green-800 text-[#f8fffd] flex flex-wrap flex-col gap-7  justify-around items-start md:flex-row rounded-3xl shadow-2xl">
                <div>
                    <h1 className="text-2xl font-bold">20,000 + </h1>
                    <p className="text-[#b5d0bf]">La gente se une a nosotros</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">20 +</h1>
                    <p className="text-[#b5d0bf]">Los países cooperaron con nosotros </p>
                </div>
                <button
                    className="bg-[#55f08c] text-black text-xl px-14 py-3 md:text-3xl md:flex items-center justify-center md:px-6 md:py-6 rounded-3xl">
                    <BsArrowRightShort size={40} className='text-8xl font-bold '   />
                </button>
            </div>

        </div>

        <div className="relative">
            <img src={road}
                className="max-w-[100%] h-[450px] md:h-[600px] rounded-t-[3rem] rounded-tr-[7rem] rounded-b-[3rem] md:rounded-tl-[5rem] md:rounded-tr-[13rem] md:rounded-b-[5rem]"
                alt="" />
            <span
                className="absolute top-[45%] whitespace-nowrap left-0 -translate-x-[20%] text-xl md:text-3xl font-semibold text-white font-serif bg-[rgba(255,255,255,.4)] px-8 py-7 rounded-3xl shadow-2xl backdrop-blur-md">Únete ahora</span>
        </div>

    </section>
    );
}

export default Miles;

import React from 'react';
import wheat from '../../images/wheat.webp'
import rise from '../../images/rise.webp'
import pumpkin from '../../images/pumpkin.webp'
import veg from '../../images/veg.webp'
import { Link } from 'react-router-dom';

const products = [
    { id: 1, img: wheat, alt: 'wheat', title: 'Trigo', description: 'Nuestro trigo es de alta calidad por siembra orgánica sin fertilizantes químicos. Nuestro trigo es alto en fibra y carbohidratos.' },
    { id: 2, img: rise, alt: 'rise', title: 'Arroz', description: 'Nuestro trigo es de alta calidad por siembra orgánica sin fertilizantes químicos. Nuestro trigo es alto en fibra y carbohidratos.' },
    { id: 3, img: pumpkin, alt: 'pumkin', title: 'Calabaza', description: 'N  uestro trigo es de alta calidad por siembra orgánica sin fertilizantes químicos. Nuestro trigo es alto en fibra y carbohidratos.' },
    { id: 4, img: veg, alt: 'veg', title: 'Vegetales', description: 'Nuestro trigo es de alta calidad por siembra orgánica sin fertilizantes químicos. Nuestro trigo es alto en fibra y carbohidratos.' },

]
const Destacate = () => {
    return (
        <section className='mt-24 px-[8%] pb-8'>
            <h1 className='font-lato text-4xl text-center tracking-wider font-extrabold'>Nuestro productos destacados</h1>
            <h4 className='mt-5 mx-auto max-w-[600px] font-sarif text-[#919191] text-xl text-center font-medium'>Tenemos amplio gama de productos agrícolas que exportamos a todo el mundo a miles de nuestros socios </h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    gap-6 place-content-center mt-12'>

                {
                    products.map((item) => (
                        <div
                            className='flex flex-col gap-6 items-center lg:max-w-[300px] px-5 py-10 bg-white rounded-[50px] xl shadow-xl' key={item.id}>
                            <img className='w-[100px] h-[100px] rounded-[40px]'  src={item.img} alt={item.alt} />
                            <h1 className='text-xl font-bold'>{item.title}</h1>
                            <p className='max-w-[220px] text-center text-md text-[#929292] font-medium'>{item.description}
                            </p>
                        </div>
                    ))
                }
            </div>

            <Link to='/' className='mt-16 block text-center font-medium text-xl text-green-500'>Ver todos los productos</Link>
        </section>
    );
}

export default Destacate;

import React from 'react';

const PrincipalComponent = () => {
    return (
        <div className="top-container bg-[#fafafa] z-10 px-[5%] md:px-[8%] relative before:content-[''] before:block before:absolute before:-z-10 before:top-[-20%] before:left-[-4%] before:-translate-y-50 before:-translate-x-50 before:bg-[#fef5e5] before:w-[300px] before:h-[300px] md:before:w-[500px] md:before:h-[500px] before:rounded-[50%] before:blur-xl overflow-x-hidden">

            <section className="flex flex-wrap md:flex-nowrap justify-center md:justify-between  gap-12  lg:item-center mt-4">
                <div className="z-10">
                    <img src="data:image/webp;base64,UklGRtgEAABXRUJQVlA4WAoAAAAQAAAAPAAAPAAAQUxQSIwBAAABkCIAkBo4c6RYsaJiVD1GlSGqqFgxRRU9RpWiDhXTqlJUKapMCqOOVh1NYXHmAxExAeA16P/4KAS2/YiYsYkREeUmLs//w5TLpKJYy+MEqvt4jGjesNguNbKVQz/qr3P4aPCcwfY5AzxB7y6aCnLBd6OCXCean6CWW4wQq5AWMqJ1HW37aWVWH0mdReu5kFJmh52ELqHLG1Q29c05wXQ7gTD9iO6LkcDP8f4C/U72n3B24lGBFCdF7CC4/hzp5teXG63pezOJtOfydLlqT+d35Pi9MwJYLpCtfB4myPmRYPUmmePUB/2MRpYDxNkki+/iBKjPijlicyMn6sA0GvlOqBAR2EfpNxLfkhAcL+98Iz3N5Wk9+KyMn3vILrWC/7OP5tzkh4DoQRdzl4Bu7qAfCJ9wEFGC51YfgXRs1UmrZdJCBrQgtxgB4p0WJ6jVfzOaBPJ3jTJ6oVFMD74bZMBwxOASh2hOI5dzgBHNG2B5QpPyqJhUFAEPyBSdwDRWbOcCfYgogG1lIpLlfgBWUDggJgMAAPAUAJ0BKj0APQA+IQyEQiGG/AYAgS2AGSGgB1CU9+X/hz+QHTlbQ9nf21/xeXZ+Ffn/+0+3TtAeYB+lP+o6iPmA/XL9pOwt6AH9L/w/WjegB5Z3sg/uN6S+YgdnX2q/sA4IPF9EDhw/u3gDGAMw75X/pPYK6PTR7eWCQir5FySCgjHCkwz1mvgMo+zSxUN2aoPauFOEC/+mQn1ooNpdOAG/72U52o6mAljdwWZL8CiYAP7/o967wFbTEujh9bpGeZ00rbsC3I0Pt4CrpvbIj5lh4ERHr/5etVrVwxMZQjnnJakd6Y5MliF25Qs9/otnHnmpn6QJS+rWr5fSqcViywjdfntSVKY253vYY0G62opWjLBR7E+w1pBC0Mq+bNi/DdyuRz/jP8Ej9PjSzU8C42zG88dcs5LoEhRzkgJQ9SUQAcwy576uNGE1QoISl/7vB0WixH4D88W6cMhAW1p+LWvNZKnZB7Q5AR7cnw7/TVXHZYsj1LDdhnW7w+KJFLNE/ycV1L+ke75HzmK+yLS6UN5J/gDAjf5yDp9VAisy0FV9/II4u9/1tD2cjd0is4TBfB2ynwXsq23xDMJhCymmE82lL2UTsUt3o9h64GX/pL413NQp3nz+TlgBlJpMG0gWbcjCK5mWuHZJs1TGVAsa9Ji3/WBj135pjHessFSiIrQPN3EsOy0KgjgMwBfz7mA6nioxknHrdakGTFaoDHO6tLHlFQGtDwKFrTE3fhLosiBIPAatt/Dw+ypD7UdOjz85XrJn3N2/vsWNrLB12hDiVC0+aPWrN7vkjXHNSzJTtC5Y/Z9kHx4xR0ooQBU+sQrvAspe1WrhD03AuV5Na2DzPzC58QRWZbDUNz/JwIuxXTNFHZvnCmTxC9OqrUOb0e2lxPkdozS5RhVLSy/t4sxDYAIZSaYC4hYvI5fsKuNbXS5Vcw6UhKo4udHQBw7A61ek5WbTgKDhMXzBG3MVxhL9DEUg7N4dTpYuSQPpIFy5nUhVEdDcbD0rdividx/6y68wLyg7Wf5edwhA2BxeOWuced5oDukEKxiKhxjYO70j9DINCeLuhgAA" className="block ml-[80%] lg:ml-[120%] md:mt-8 w-8 md:w-auto" alt="" />
                    <h1
                        className="text-4xl text-center md:text-start sm:leading-[4rem] md:text-[5rem] md:leading-[5rem]  font-bold font-poppins font-[#212121]">
                        Somos Tinky <br /> Comerciantes
                    </h1>
                    <h3 className="font-lato text-center md:text-2xl font-[#3c3c3c] font-bold mt-8">Encargados de encontrar precios cómodos para tí
                    </h3>

                    <div
                        className="w-full bg-[#fafafa] mt-14 rounded-[40px]  shadow-xl shadow-slate-800/10 flex flex-none justify-between items-center">
                        <input type="text" name="search" placeholder="¿Qué estás buscando?"
                            className="border-none w-[100%] px-4 py-4 md:px-12 md:py-5 rounded-[50px] text-[#6b6b6b] font-medium bg-[#fafafa] placeholder:text-[#6b6b6b] placeholder:font-medium focus:ring-0" />
                        <button className="bg-green-500 text-white px-6 py-4  md:px-12 md:py-5 rounded-[50px]">Buscar</button>
                    </div>


                    <div className=" mt-12 md:mt-[7rem] bg-transparent">
                        <div className="flex items-center justify-center flex-wrap gap-3 bg-transparent">
                            <div
                                className="w-16 h-16 md:w-20 md:h-20 bg-cover bg-center bg-[url('./images/profile_1.webp')] rounded-full border-4 border-white z-10">
                            </div>
                            <div
                                className="-ml-10 w-16 h-16 md:w-20 md:h-20 bg-cover bg-center bg-[url('./images/profile_2.webp')] rounded-full border-4 border-white z-10">
                            </div>
                            <div
                                className="-ml-10 w-16 h-16 md:w-20 md:h-20 bg-cover bg-center bg-[url('./images/profile_3.webp')] rounded-full border-4 border-white z-10">
                            </div>

                            <div className="ml-9 w-16 h-16 bg-cover bg-center bg-[url('./images/start.webp')]  z-10">
                            </div>

                            <div className="ml-5">
                                <span className="text-md font-lato text-[#727272]">Únete a nuestra comunidad</span><br />
                                <span className="text-md font-lato font-bold text-[#696a6a]">Te estamos esperando</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://i.ibb.co/5vwf1k8/green-leaves.webp" className="md:w-[50%] h-auto z-20" alt="plant" />
            </section>

        </div>
    );
}

export default PrincipalComponent;

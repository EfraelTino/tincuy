import React from 'react';
import aribn from '../../logos/airbn.svg';
import cdn from '../../logos/cdn.svg';
import framer from '../../logos/fr.svg';
import himalaya from '../../logos/himalaya.svg';
import open from '../../logos/open.svg';
import patn from '../../logos/patn.svg';

const imagesP = [
    { id: 1, src: aribn, alt: 'airbnb' },
    { id: 2, src: cdn, alt: 'cdn' },
    { id: 3, src: framer, alt: 'framer' },
    { id: 4, src: himalaya, alt: 'himalaya' },
    { id: 5, src: open, alt: 'open' },
    { id: 6, src: patn, alt: 'path' },
]

const Partners = () => {
    return (
        <section className="mt-28">
            <h1 className="font-lato text-4xl text-center tracking-wider font-extrabold">Confianza de más de 20,000 personas</h1>


            <div className="mt-12 flex items-center justify-center gap-x-16 gap-y-4 flex-wrap" >
            {
                
                    
                    imagesP.map((item) => (
                            <img className="w-28" src={item.src} alt={item.alt} key={item.id}/>
                    
                ))
            }
            </div>
        </section>
    );
}

export default Partners;

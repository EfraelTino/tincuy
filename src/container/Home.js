import React,{useState ,useEffect} from 'react';
import Featured from '../components/HomeComponent/Featured';
import Miles from '../components/HomeComponent/Miles';
import Partners from '../components/HomeComponent/Partners';
import PrincipalComponent from '../components/HomeComponent/Seccha';
import Story from '../components/HomeComponent/Story';
import useObserver from '../hooks/useObserver';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

    const [observer, setElements, entries] = useObserver({
        threshold:0.25,
        root:null,
    })

    useEffect(() =>{
        const datos = document.querySelector('.featured');
        setElements(datos)
    }, [setElements])
    return (
       <>
       <PrincipalComponent/>
       <Featured className='featured' />
       <Partners />
       <Story />
       <Miles />
       </>
    );
}

export default Home;

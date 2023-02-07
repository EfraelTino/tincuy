import React,{useState ,useEffect} from 'react';
import Featured from '../components/HomeComponent/Featured';
import Miles from '../components/HomeComponent/Miles';
import Partners from '../components/HomeComponent/Partners';
import PrincipalComponent from '../components/HomeComponent/Seccha';
import Story from '../components/HomeComponent/Story';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        // console.log('Moviendo el scroll')
        // console.log(scrollY)
        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        }
        window.addEventListener('scroll', detectarScroll);
        return () =>(window.removeEventListener('scroll', detectarScroll));
    }, [scrollY]);

    return (
       <>
       <PrincipalComponent/>
       <Featured />
       <Partners />
       <Story />
       <Miles />
       </>
    );
}

export default Home;

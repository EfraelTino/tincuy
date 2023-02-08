import React from 'react';
import Featured from '../components/HomeComponent/Featured';
import Miles from '../components/HomeComponent/Miles';
import Partners from '../components/HomeComponent/Partners';
import PrincipalComponent from '../components/HomeComponent/Seccha';
import Story from '../components/HomeComponent/Story';
import useObserver from '../hooks/useObserver';

const Home = () => {

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

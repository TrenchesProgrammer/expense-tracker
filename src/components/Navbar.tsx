import {Center} from '@mantine/core'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const location = useLocation();
    const [pageName, setPageName] = useState('');
    
    useEffect(() => {
        const path = location.pathname;
        const name = path === '/'
        ? 'Home'
        : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
        setPageName(name);
    }, [location.pathname]);
    return ( 
        <>
            <Center>
                <h3>{pageName}</h3>
            </Center>
           
        </>
     );
}
 
export default Navbar;
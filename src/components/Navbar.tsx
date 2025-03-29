import { MantineProvider } from '@mantine/core'
import {Center} from '@mantine/core'
const Navbar = () => {
    return ( 
        <>
        <MantineProvider>
            <Center>
                <h3>FinTrack</h3>
            </Center>
        </MantineProvider>
           
        </>
     );
}
 
export default Navbar;
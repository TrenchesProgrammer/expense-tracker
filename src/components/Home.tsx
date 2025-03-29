import {Box, Text, Title} from '@mantine/core'
import Activity from './Activity';
const Home = () => {
    return ( 
        <>  
        <Box p={'md'}>
            <Title order={1}>Good afternoon Ryan</Title>
            <Title order={3}>Recent activity</Title>
            <Activity/>
            <Title order={3}>Expenses at a glance</Title>
            
        </Box>
           
        </>
     );
}
 
export default Home;
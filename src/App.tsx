import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  const theme = createTheme({
    fontFamily: "Noto sans, sans-serif",
  });
  return (
    <>
      <MantineProvider theme={theme}>
        <Navbar/>
        <Home/>
      </MantineProvider>
    </>
  )
}

export default App

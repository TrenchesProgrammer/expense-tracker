import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';

function App() {
  const theme = createTheme({
    fontFamily: "Noto sans, sans-serif",
  });
  // const pageName = window.location.pathname === '/' ? 'Home' : window.location.pathname.slice(1).charAt(0).toUpperCase() + window.location.pathname.slice(2);
  return (
    <Router>
      <MantineProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/expenses' element={<Expenses />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}

export default App;

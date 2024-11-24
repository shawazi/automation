import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';

// Get the base URL from Vite's import.meta.env
const baseUrl = import.meta.env.BASE_URL;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={baseUrl}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh', 
          bgcolor: 'background.default',
          overflow: 'hidden'
        }}>
          <Navbar />
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', flexGrow: 1 }}>
            <Container maxWidth="lg" sx={{ mt: 8 }}>
              <Box component="main" sx={{ width: '100%' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Box>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

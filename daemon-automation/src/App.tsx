import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import { useEffect } from 'react';

// Page tracking component
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    if (window.analytics) {
      window.analytics.page({
        path: location.pathname,
        url: window.location.href,
        search: location.search,
        title: document.title
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageTracker />
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

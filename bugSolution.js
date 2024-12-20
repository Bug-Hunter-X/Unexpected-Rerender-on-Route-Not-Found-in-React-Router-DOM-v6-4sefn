import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log('Home rendered:', location.pathname);
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  console.log('About rendered:', location.pathname);
  return <div>About</div>;
}

function NotFound() {
  const location = useLocation();
  console.log('Not Found rendered:', location.pathname);
  return <div>Not Found</div>;
}

export default App; 
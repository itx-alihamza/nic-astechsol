import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Layout from "./components/Layout";

// Lazy load pages for better performance - each page loads only when needed
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Ourprojects = lazy(() => import("./pages/Ourproject"));
const Smarthelmet = lazy(() => import("./pages/Smarthelmet"));
const Smartbel = lazy(() => import("./pages/Smartbel"));
const Smartlocker = lazy(() => import("./pages/Smartlocker"));
const Gettouch = lazy(() => import("./pages/Gettouch"));

import './App.css';

// Loading fallback component - shows while pages are loading
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Ourprojects />} />
          <Route path="smarthelmet" element={<Smarthelmet />} />
          <Route path="smartbel" element={<Smartbel />} />
          <Route path="smartlocker" element={<Smartlocker />} />
          <Route path="gettouch" element={<Gettouch />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
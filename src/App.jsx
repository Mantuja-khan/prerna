import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Layout components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Loading from './components/ui/Loading'
import ContactButton from './components/ui/ContactButton'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Services = lazy(() => import('./pages/Services'))
const Cloud = lazy(() => import('./pages/Cloud'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Cloud pages
const CloudEmail = lazy(() => import('./pages/cloud/CloudEmail'))
const CloudBackup = lazy(() => import('./pages/cloud/CloudBackup'))
const CampusServer = lazy(() => import('./pages/cloud/CampusServer'))

function App() {
  const location = useLocation()
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-16 pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Suspense fallback={<Loading />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cloud" element={<Cloud />} />
                <Route path="/cloud/email" element={<CloudEmail />} />
                <Route path="/cloud/backup" element={<CloudBackup />} />
                <Route path="/cloud/campus-server" element={<CampusServer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <ContactButton />
      <Footer />
    </>
  )
}

export default App;
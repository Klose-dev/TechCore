import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import BackToTop from "@/components/back-to-top";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "sonner";
import Loading from "@/components/loading";
import { EASE } from "@/components/ui/motion";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));

const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const SinglePost = lazy(() => import("./pages/single-post"));
const SingleProject = lazy(() => import("./pages/single-project"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const Developers = lazy(() => import("./pages/developers"));
const Contact = lazy(() => import("./pages/contact"));
const Blog = lazy(() => import("./pages/blog"));
const HomeConsulting = lazy(() => import("./pages/home-consulting"));
const HomeSEOAgency = lazy(() => import("./pages/home-seo-agency"));
const NotFound = lazy(() => import("./pages/not-found"));

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <Routes location={location}>
                <Route index element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/single-post" element={<SinglePost />} />
                <Route path="/single-project" element={<SingleProject />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/home-consulting" element={<HomeConsulting />} />
                <Route path="/home-seo-agency" element={<HomeSEOAgency />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          <Footer />
          <Toaster richColors />
          <BackToTop />
          <ScrollToTop />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;

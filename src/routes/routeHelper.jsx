import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home.jsx'
import AboutUsPage from '../pages/about/AboutUs.jsx'
import ServicesPage from '../pages/services/Services.jsx'
import GalleryPage from '../pages/gallery/Gallery.jsx'
import TestimonialsPage from '../pages/testimonials/Testimonials.jsx'
import ContactUsPage from '../pages/contact/ContactUs.jsx'
import NotFoundPage from '../pages/not-found/NotFound.jsx'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getGalleryPageRoute,
  getHomePageRoute,
  getServicesPageRoute,
  getTestimonialsPageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
      {
        path: getAboutPageRoute(),
        element: <AboutUsPage />,
      },
      {
        path: getServicesPageRoute(),
        element: <ServicesPage />,
      },
      {
        path: getGalleryPageRoute(),
        element: <GalleryPage />,
      },
      {
        path: getTestimonialsPageRoute(),
        element: <TestimonialsPage />,
      },
      {
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]

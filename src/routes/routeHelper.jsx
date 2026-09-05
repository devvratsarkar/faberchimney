import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ServicesPage from '../pages/services/Services'
import ServiceDetailPage from '../pages/services/ServiceDetail'
import ContactUsPage from '../pages/contact/ContactUs'
import GetAQuotePage from '../pages/quote/GetAQuote'
import BlogPage from '../pages/blog/Blog'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getQuotePageRoute,
  getServiceDetailPageRoute,
  getServicesPageRoute,
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
        path: getServiceDetailPageRoute(),
        element: <ServiceDetailPage />,
      },
      {
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
      {
        path: getQuotePageRoute(),
        element: <GetAQuotePage />,
      },
      {
        path: getBlogPageRoute(),
        element: <BlogPage />,
      },
    ],
  },
]

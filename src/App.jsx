import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PremiumLoader from './components/ui/PremiumLoader.jsx';
import { RouterData } from './routes/routeHelper.jsx';

const router = createBrowserRouter(RouterData);

function App() {
  return (
    <>
      <PremiumLoader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

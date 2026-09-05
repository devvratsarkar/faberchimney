import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterData } from './routes/routeHelper.jsx';

const router = createBrowserRouter(RouterData);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

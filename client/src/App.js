import Home from './Pages/Home/Home'
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <RouterProvider router={Routes}/>
  );
}

export default App;

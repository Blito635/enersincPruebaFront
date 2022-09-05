
import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './pages/routes';

function App() {
  const reactRoutes= useRoutes(routes)

  

  return (
    <div className="App">
      {reactRoutes}
    </div>
  );
}

export default App;

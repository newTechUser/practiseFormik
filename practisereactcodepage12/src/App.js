import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Formformik from './components/Formformik';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Formformik/>
      <Helmet>
        <meta name="description" content='React Application'/>
        <title>Home Page</title>

      </Helmet>    
      
    </div>
  );
}

export default App;

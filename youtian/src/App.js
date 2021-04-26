import { BrowserRouter as Router} from 'react-router-dom'
import RouterView from './components/router-view'
import config from './routers/index'
import './App.css';
// import Register from 'view/user/register/Register'
// import Main from 'view/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <RouterView routes={config.routes}></RouterView>
      </Router>
      {/* <Register></Register> */}
    </div>
  );
}

export default App;

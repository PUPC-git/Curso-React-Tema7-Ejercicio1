import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
//import { login } from './redux/actions/actions';

import Mensajes from './views/Mensajes/Mensajes.view';
import Vista from './views/Vista.view';

function App() {
  //const dispatch = useDispatch();
  //const login = useSelector(state => rootReducer.login);
  //let log = () => { dispatch(login()); }
  //console.log(log);
  //console.log(login);

  
  //console.log(reducer);

  return (
    <div className="App">
      <div className="App-body">
        <Vista></Vista>
        
        
        <Mensajes></Mensajes>
        
      </div>
    </div>
  );
}

export default App;

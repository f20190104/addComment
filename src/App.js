import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
      <MainComponent/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

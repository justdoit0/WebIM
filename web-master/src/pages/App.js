import React from 'react';
import { Route } from 'react-router';
// import { Chat, ContactItem, ContactList } from '../../src/components'
import { Chat, ContactItem, ContactList } from '../components'
import { BrowserRouter as Router } from "react-router-dom"
import LoginPage from './login/LoginPage';
import { Provider } from "react-redux"
import initStore from '../store';
import routes from "../routers"
const store = initStore()






class App extends React.Component {

  render() {
    return (
    <div>
      <Provider store={store}>
      <Router  >
      { routes }
      </Router> 
      </Provider>
    </div>
    );
  }
}

export default App

/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './app/store'

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
=======
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> main
  document.getElementById('root')
)

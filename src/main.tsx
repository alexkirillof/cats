import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename='/cats/'>
      <App />
    </BrowserRouter>
  </Provider>
)

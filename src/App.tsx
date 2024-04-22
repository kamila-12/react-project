
import './App.css'
import { List } from './components/List'
import {store} from './store/store';
import { Provider } from 'react-redux';

function App() {
  

  return (
    <Provider store={store}>
    <List />
</Provider>

  )
}

export default App

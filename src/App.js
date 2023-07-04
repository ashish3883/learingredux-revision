import logo from './logo.svg';
import './App.css';
import SignIn from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <SignIn/>
    </Provider>
  );
}

export default App;

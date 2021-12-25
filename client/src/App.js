import './App.css';
import Header from './Components/Header/Header';
import FooterPage from './Components/Footer/Footer';
import ContactsPage from './Components/Contacts/Contacts';
import ItemsPage from './Components/Items/Items';
import LoginPage from './Components/Login/Login';
import RegisterPage from './Components/Register/Register';
import { Route} from 'react-router';

function App() {
  return (
    <div className="App">
      
      <Header />
     
      <Route path="/" exact component={ItemsPage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      
      
      <FooterPage />
    </div>
  );
}

export default App;

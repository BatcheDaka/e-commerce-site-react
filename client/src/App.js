import './App.css';
import Header from './Components/Header/Header';
import FooterPage from './Components/Footer/Footer';
import ContactsPage from './Components/Contacts/Contacts';
import ItemsPage from './Components/Items/Items';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
      <Route path="/" exact element={<ItemsPage/>} />
      <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
      
      <FooterPage />
    </div>
  );
}

export default App;

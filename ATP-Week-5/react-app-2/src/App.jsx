import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Counter from './components/counter';

function App(){


return(

  <div>

    <Navbar />
    <div className='mx-auto my-10 min-h-screen max-w-6xl px-4'>
    {/* <UserList /> */}
    <Counter />
    </div>
    <Footer />
  </div>
  
);
}

export default App
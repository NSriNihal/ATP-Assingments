import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserList from './components/UserList';
import Counter from './components/counter';
import TestRefTypes from './components/testRefTypes';
import APIDemo from './components/APIDemo';
import FormDemo from './components/FormDemo';
import Assing from './components/Assing';

function App(){

console.log("App component rendered")
return(

  <div>

    <Navbar />
    <div className='mx-auto my-10 min-h-screen max-w-6xl px-4'>
    {/* <UserList /> */}
    {/* <Counter />
    <TestRefTypes />
    <APIDemo/> */}
    {/* <FormDemo/> */}
    <Assing/>
    </div>
    <Footer />
  </div>

  
);
}

export default App
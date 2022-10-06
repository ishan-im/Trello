
import './App.css';

import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';

import Notification from './components/Notification/Notification';

import MainConatiner from './components/MainContainer/MainConatiner';


function App() {
  return (
    <div>

        <Header />
        <Navbar/>
        <main className='main__wrapper'>

          <section>
              <Notification/>
              <MainConatiner/>
              
          </section>

        </main>
    </div>
  );
}

export default App;

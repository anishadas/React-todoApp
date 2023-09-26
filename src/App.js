import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='todoapp'>
        <div className='leftside'>
          <Input />
        </div>
        <div className='rightside'>
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;

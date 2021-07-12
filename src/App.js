import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const handleGoogle=()=>{
    const url = `https://apimaterialbuy.herokuapp.com/users/google`
    // axios.get(url)
    // .then(res=>console.log(res.data))
    window.open(url, "_blank", 'width=500px,height=500px');
  }
  return (
    <div className="App">
    <button onClick={handleGoogle} >Google sign in</button>
    </div>
  );
}

export default App;

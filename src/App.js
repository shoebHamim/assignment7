import './App.css';
import player_data from './data/data.json';
import { useState } from 'react';
import Player from './Player/Player';
import Cart from './Cart/Cart';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [player, setPlayer] = useState(player_data);
  const [cart, setCart] = useState([]);
  const handleCart = (player) => {
    if (cart.filter(item => item.name == player.name).length == 0) {
      // console.log('already added');
      const newCart = [...cart, player];
      setCart(newCart);
    }
    else{
      alert('Player Already Selected!');
    }

  }

  return (
    <div className='app'>
      <h1>Build Your Own Team</h1>
      <Cart  cart={cart}></Cart>
      <br /><br />
      {player.map(p =>
        <Player player={p} handleCart={handleCart}></Player>
      )
      }
    </div>
  );
}

export default App;

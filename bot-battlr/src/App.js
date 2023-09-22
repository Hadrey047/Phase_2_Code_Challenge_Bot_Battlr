import React from 'react';
import BotCollection from './components/BotCollection';
import BotProfile from './components/BotProfile';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <div className="App">
      <BotCollection />
      <BotProfile />
      <YourBotArmy/>
    </div>
  );
}

export default App;

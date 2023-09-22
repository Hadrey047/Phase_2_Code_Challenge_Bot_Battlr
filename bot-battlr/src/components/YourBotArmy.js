import React from 'react'

function YourBotArmy() {
  
  const handleDeleteBot = (botID) =>{
    fetch(`http://localhost:3000/userArmy/${botId}`, 
    {mehtod: 'DELETE',})

    .then ((response) => {if(response.ok){
      const updatedArmy = userArmy.filter((bot)=> bot.id !== botId);
      setUserArmy(updatedArmy);
    }
      else{
        console.error('Failed to delete bot:',response.status);
      }
    })
    .catch((error) =>{
      console.error('Error deleting bot', error)
    });
  };
  

  return (
    <div>{handleDeleteBot}</div>
  )
}

export default YourBotArmy
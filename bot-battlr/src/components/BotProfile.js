import { Button } from '@material-ui/core'
import React from 'react'

function BotProfile () {
   
  return (
    <div>
       {bots.map((bot) => (
  <div key={bot.id}>
    <h2>{bot.name}</h2>
    <p>{bot.description}</p>
    <img src={bot.image} alt={bot.name} />
  </div>
))}
    </div>
  )}
export default BotProfile
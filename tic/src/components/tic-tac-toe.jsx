import { useState } from 'react';
import useTicTacToe from '../hooks/use-tic-tac-toe';




function TicTacToe() {
      const {board,handleclick,calculateWinner,resetGame,getStatusMessage}=useTicTacToe()

  return ( 
  <div className='game'>
    <div className="status">
        {getStatusMessage()}
      <button className='reset-button'onClick={resetGame}>reset game</button>
    </div>
    <div className="board">
      {board.map((b,index)=>{
        return( <button className='cell'key={index}onClick={()=>handleclick(index)}
        disabled={b!==null}>
            {b}</button>);
      })}</div>
    </div>);
  
}

export default TicTacToe;

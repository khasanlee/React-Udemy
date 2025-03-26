import React from 'react'
import './NewGoal.css'

const NewGoal = () => {
    const addGoalHandler = (event)=>{
        event.preventDefault()

        const newGoal = {
            id: Math.random().toString(),
            text: "my new goal"
        }
        console.log(newGoal)
    }
  return (
    <div>
      <form className='new-goal' onSubmit={addGoalHandler}>
        <input type='text' />
        <button type='submit'>Add Goal</button>
      </form>
    </div>
  )
}

export default NewGoal

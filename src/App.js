import React, {useState} from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';
function App() {
  const [courseGoals, setCourseGoals]= useState([
      { id: 'cg1', text: 'Finish the course' },
      { id: 'cg2', text: 'Learn all about the course main topic' },
      { id: 'cg3', text: 'Help other students in the course Q&A' }
    ])

  const addNewGoalHandler = (newGoal)=> {
    setCourseGoals(courseGoals.concat(newGoal))
  }
  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;

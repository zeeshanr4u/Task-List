import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasklist from './components/Tasklist';
import Taskcreate from './components/Taskcreate';
import Taskdelete from './components/Taskdelete';
import style from 'styled-components'

const UL = style.ul`
list-style-type: none;
display: flex;
background-color: #86b9cf
`
const LI = style.li`
background-color: #f1f1f1;
margin: 10px;
padding: 10px;
font-size: 20px;
border: 2px solid black;
border-radius: 20px;
`

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const pushdata = (newTask) => {
    setTaskList([...taskList, newTask]);
  }
  const removeTasks = (ids) => {
    setTaskList(taskList.filter(task => !ids.includes(task.id)))
  }


  return <>
    <Router>


      <div>
        <nav>
          <UL>
            <LI>
              <Link to="/list-tasks"> All Tasks List</Link>
            </LI>
            <LI>
              <Link to="/create-task">Create Task</Link>
            </LI>
            <LI>
              <Link to="/bulk-delete">Delete Tasks</Link>
            </LI>
          </UL>
        </nav>

      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/list-tasks" element={<Tasklist taskArray={taskList} />} />
        <Route exact path="/create-task" element={<Taskcreate pushdata={pushdata} />} />
        <Route exact path="/bulk-delete" element={<Taskdelete taskArray={taskList} removeTasks={removeTasks} />} />
      </Routes>
    </Router>

  </>
}
export default App;
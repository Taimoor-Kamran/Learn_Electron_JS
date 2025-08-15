import React from 'react'
import TodoForm from '../components/forms/TodoForm';

const Work:React.FC = () => {
  const electron = (window as any).electron;
  return (
    <div>This is work page content <br />
    The home director is a {electron.homeDir()} <br />
    The OS arch os is {electron.arch()} <br />
    The OS version is {electron.osVersion()}
    <TodoForm/>
    </div>
  )
}

export default Work
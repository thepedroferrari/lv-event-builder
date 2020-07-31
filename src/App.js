import React, { useState } from 'react'

import './App.css'

function Todo({ homeName, awayName, datetime }) {
  return (
    <div
      className="todo"
    >
      <span>{homeName} - {awayName}</span> <time dateTime={datetime}>{datetime}</time>
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [homeName, setHomeName] = useState('')
  const [awayName, setAwayName] = useState('')
  const [datetime, setDatetime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!!homeName && !!awayName && !!datetime) {
      addTodo({ homeName, awayName, datetime })
      setHomeName('');
      setAwayName('');
      setDatetime('');
    }
    return;
  }

  const updateTime = (e) => {
    if (!e.target['validity'].valid) return;
    const datetime = e.target.value;
    setDatetime(datetime);
  }

  return (
    <>
      <h2>Add a new event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="homename">Home team name:</label>
          <input
            type="text"
            className="input"
            value={homeName}
            placeholder="Home Team"
            name="homename"
            onChange={e => setHomeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="awayname">Away team name:</label>
          <input
            type="text"
            className="input"
            value={awayName}
            name="awayname"
            placeholder="Away Team"
            onChange={e => setAwayName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="datetime">Event Date:</label>
          <input
            type="datetime-local"
            className="input"
            value={datetime}
            onChange={updateTime}
          />
        </div>
        <button type="submit" className="submit">
          ADD
      </button>
      </form>
    </>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      homeName: 'Manchester United',
      awayName: 'Real Madrid',
      datetime: '2020-08-12T20:30'
    },
    {
      homeName: 'Liverpool',
      awayName: 'Arsenal',
      datetime: '2021-08-12T20:30'
    },
    {
      homeName: 'Barcelona',
      awayName: 'Bayern Munich',
      datetime: '2022-08-12T20:30'
    }
  ])

  const addTodo = ({ homeName, awayName, datetime }) => {
    const newTodos = [...todos, { homeName, awayName, datetime }]
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            homeName={todo.homeName}
            awayName={todo.awayName}
            datetime={todo.datetime}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App

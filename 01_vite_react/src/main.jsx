import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>This is a heading inside a function</h1>
  )
}

const anotherUser = "Thor odinson"
const Element = (
  <a href='https://google.com' target='_blank'>Google</a>
)

const anotherElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click me to visit google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App />
    anotherElement
)
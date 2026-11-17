import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import HumanCard from './components/HumanCard'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    age: 20,
    isLoggedIn: true
  }

  const developer = {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Portrait of Alex Rivera",
    name: "Alex Rivera",
    description:
      "Full-stack developer with a passion for building clean, user-friendly interfaces and scalable backend systems.",
    skills: ["JavaScript", "React", "Node.js"],
    skillTheme: "indigo",
  };

  // Example 2: Designer
  const designer = {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
    imageAlt: "Portrait of Maya Chen",
    name: "Maya Chen",
    description:
      "Product designer who loves turning complex problems into simple, delightful experiences people enjoy using every day.",
    skills: ["Figma", "UI/UX", "Prototyping"],
    skillTheme: "rose",
  };

  return (
    <>
      <h1 className="bg-linear-to-r from-fuchsia-700 to-purple-800 text-white text-2xl font-bold px-8 py-5 rounded-2xl shadow-lg shadow-purple-900/20 ">
        Some great memories
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <Card name="Avik Muherjee" someObj={myObj} />
        <Card name="Priti Mukherjee" />
        <Card name="Anita Mukherjee" />
        <Card />

        <HumanCard {...designer} />
        <HumanCard {...developer} />
      </div>
    </>
  )
}

export default App

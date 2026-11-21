import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')

  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      {/* <h1 className='p-3 bg-purple-700 text-center text-white font-bold hover:text-purple-700 transition-all duration-300 ease-in hover:bg-white'>Theme switcher</h1> */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-[#0f172a] px-4 py-10">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-5">
              {/* ThemeBtn */}
              <ThemeBtn />
            </div>

            <div className="w-full flex flex-wrap justify-center items-start gap-6">
              <Card
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                title="Nike Air Max"
                description="Comfortable everyday sneakers with a modern sporty design."
                price="₹4,999"
              />

              <Card
                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                title="Classic Watch"
                description="Minimal wristwatch with a timeless design and clean finish."
                price="₹2,499"
              />

              <Card
                image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
                title="Leather Backpack"
                description="A durable everyday backpack with spacious compartments."
                price="₹1,899"
              />

              <Card
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                title="Wireless Headphones"
                description="Immersive sound with soft ear cushions and a sleek finish."
                price="₹3,299"
              />

              <Card
                image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                title="Digital Camera"
                description="Compact camera for capturing everyday moments in detail."
                price="₹8,499"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App

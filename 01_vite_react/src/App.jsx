import Coffee from "./coffee"

function App() {

  return ( // We can return only one item or tag 
    <>
      <h1>This is the h1 heading tag</h1>
      <Coffee />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea suscipit fugit architecto! Laudantium ipsam soluta ad id accusamus numquam libero expedita nihil. Iste perferendis ducimus error aliquid reprehenderit aspernatur, repellendus quas placeat aperiam.</p>
    </> 
    /* so using div allows us to return multiple things..which is not a good practice for complex ui

    intead of using <div></div> we can use <></>

    <></> this is called fragment in .jsx or react
    */
  )
}

export default App

import { useEffect, useState } from "react"
import {
  GetPizza,
  GetPasta,
  GetDessert,
  GetDrinks,
  GetSauces,
  GetSides,
} from "../script/Controller"
import Card from "../component/Menucard"

function Home() {
  const [display, setdisplay] = useState(0)
  const [menu, setmenu] = useState()
  const [keyword, setkeyword] = useState("")
  const [ignore, setignore] = useState(false)
  async function fetch() {
    let m = []
    m[0] = await GetPizza()
    m[1] = await GetPasta()
    m[2] = await GetDessert()
    m[3] = await GetDrinks()
    m[4] = await GetSauces()
    m[5] = await GetSides()
    console.log(m)
    setmenu(m)
  }
  useEffect(() => {
    fetch()
    setignore(true)
  }, [ignore])
  return (
    <div className="home">
      <div className="home-center">
        <div className="home-inp">
          <div className="search">
            <input
              onChange={(e) => {
                setkeyword(e.target.value)
              }}
            ></input>
          </div>
          <div className="home-button">
            <button
              onClick={() => {
                setdisplay(0)
              }}
            >
              pizza
            </button>
            <button
              onClick={() => {
                setdisplay(1)
              }}
            >
              pasta
            </button>
            <button
              onClick={() => {
                setdisplay(2)
              }}
            >
              dessert
            </button>
            <button
              onClick={() => {
                setdisplay(3)
              }}
            >
              drinks
            </button>
            <button
              onClick={() => {
                setdisplay(4)
              }}
            >
              sauces
            </button>
            <button
              onClick={() => {
                setdisplay(5)
              }}
            >
              sides
            </button>
          </div>
        </div>
        {ignore && (
          <div className="home-menulist">
            {menu?.[display]
              ?.filter((me) =>
                me?.name?.toLowerCase().includes(keyword.toLowerCase())
              )
              .map((m) => (
                <Card
                  name={m?.name}
                  image={m?.image}
                  price={m?.price}
                  vege={m?.vegetarian}
                  spic={m?.spicy}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

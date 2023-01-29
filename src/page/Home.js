import { useEffect, useState, useCallback } from "react"
import {
  GetPizza,
  GetPasta,
  GetDessert,
  GetDrinks,
  GetSauces,
  GetSides,
} from "../script/Controller"
import Card from "../component/Menucard"
import BCard from "../component/Bigcard"

function Home() {
  const [display, setdisplay] = useState(0)
  const [click, setclick] = useState(false)
  const [idc, setidc] = useState(0)
  const changeclick = useCallback(
    (id) => {
      setclick(!click)
      setidc(id)
    },
    [click]
  )
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
                setclick(false)
              }}
            >
              pizza
            </button>
            <button
              onClick={() => {
                setdisplay(1)
                setclick(false)
              }}
            >
              pasta
            </button>
            <button
              onClick={() => {
                setdisplay(2)
                setclick(false)
              }}
            >
              dessert
            </button>
            <button
              onClick={() => {
                setdisplay(3)
                setclick(false)
              }}
            >
              drinks
            </button>
            <button
              onClick={() => {
                setdisplay(4)
                setclick(false)
              }}
            >
              sauces
            </button>
            <button
              onClick={() => {
                setdisplay(5)
                setclick(false)
              }}
            >
              sides
            </button>
          </div>
        </div>
        <div className="home-menulist">
          {!click && (
            <>
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
                    id={m?.id}
                    changeclick={changeclick}
                  />
                ))}
            </>
          )}
          {click && (
            <>
              <BCard
                name={menu?.[display][idc]?.name}
                image={menu?.[display][idc]?.image}
                price={menu?.[display][idc]?.price}
                vege={menu?.[display][idc]?.vegetarian}
                spic={menu?.[display][idc]?.spicy}
                id={menu?.[display][idc]?.id}
                ing={menu?.[display][idc]?.ingredients}
                changeclick={changeclick}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home

import { useState, useCallback } from "react"
import Card from "./Menucard"
import BCard from "./Bigcard"

const Menulist = ({ menu, display, keyword }) => {
  const [click, setclick] = useState(false)
  const [idc, setidc] = useState(0)
  const changeclick = useCallback(
    (id) => {
      setclick(!click)
      setidc(id)
    },
    [click]
  )
  return (
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
  )
}
export default Menulist

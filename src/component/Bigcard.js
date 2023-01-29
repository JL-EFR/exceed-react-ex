import { BsCoin } from "react-icons/bs"
import { GiChiliPepper } from "react-icons/gi"
import { FaSeedling } from "react-icons/fa"

const BCard = ({ name, image, price, vege, spic, id, ing, changeclick }) => {
  return (
    <div
      className="bcard"
      onClick={() => {
        changeclick(id)
      }}
    >
      <div className="bcard-header">
        <img src={image} alt="food" className="card-img" />
      </div>
      <div className="bcard-body">
        <div className="bcard-name">{name}</div>

        <div className="price">
          {price}&nbsp;
          <BsCoin />
        </div>
        <div className="card-icon">
          {vege && <FaSeedling />}
          {spic && <GiChiliPepper />}
        </div>
        {ing[0] && (
          <div className="bcard-ing">
            <span className="bcard-ingtext">Ingredients</span>
            <ul className="bcard-bullet">
              {ing.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default BCard

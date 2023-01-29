import { BsCoin } from "react-icons/bs"
import { GiChiliPepper } from "react-icons/gi"
import { FaSeedling } from "react-icons/fa"

const Card = ({ name, image, price, vege, spic }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt="food" className="card-img" />
      </div>
      <div className="card-body">
        <div className="card-name">{name}</div>

        <div className="price">
          {price}&nbsp;
          <BsCoin />
        </div>
        <div className="card-icon">
          {vege && <FaSeedling />}
          {spic && <GiChiliPepper />}
        </div>
      </div>
    </div>
  )
}
export default Card

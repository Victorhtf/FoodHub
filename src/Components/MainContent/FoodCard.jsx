import pizza from '../../assets/pizza.jpg'

import '../../Styles/MainContent/FoodCard.sass'

const FoodCard = () => {
  return (
    <div className='container'>
        <div className="details">
            <img className='photo' src={pizza}></img>
            <h1 className='title'>Pepperoni</h1>
        </div>
        <button>Order</button>
    </div>
  )
}

export default FoodCard
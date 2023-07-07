import "../../Styles/MainContent/MainContent.sass"

const MainContent = () => {
  return (
    <div className="container-maincontent">
        <div className="card-main">
            <div className="title">
                <h1>TASTY, DELICIOUS & FAST</h1>
                <h3>Our cookers is ready to made the fastest food as you can imagine, they are waiting for your order sitting in a chair close to stove!</h3>
            </div>
            <div className="card-grid">
                <div className="blue"></div>
                <div className="yellow"></div>
                <div className="green"></div>
                <div className="red"></div>
            </div>
        </div>
    </div>
  )
}

export default MainContent
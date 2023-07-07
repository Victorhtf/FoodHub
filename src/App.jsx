import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import MainContent from './Components/MainContent/MainContent'

import './Styles/global.sass'

const App = () => {
  return (
    <div>
      <div className="header">
        <Header/>

      </div>
      <div className="main-content">
        <MainContent/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App



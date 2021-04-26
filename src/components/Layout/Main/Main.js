import {Route, Switch} from 'react-router-dom';
import './Main.css';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import Home from '../../../views/Home/Home';

function LayoutMain() {
  return (
    <div className="main-layout">
      <Header/>

      <main className="main-content container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
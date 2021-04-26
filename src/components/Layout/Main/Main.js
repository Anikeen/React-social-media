import {Route, Switch} from 'react-router-dom';
import './Main.css';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';

function LayoutMain() {
  return (
    <div className="main-layout">
      <Header/>

      <main className="main-content">
        <Switch>
        </Switch>
      </main>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
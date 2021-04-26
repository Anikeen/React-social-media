import {Route, Switch} from 'react-router-dom';
import './Main.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Home from '../../../views/Home/Home';
import Login from '../../../views/Auth/Login';
import Registration from '../../../views/Auth/Registration';

function LayoutMain() {
  return (
    <div className="main-layout">
      <Header/>

      <main className="main-content container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts/login" component={Login} />
          <Route exact path="/accounts/registration" component={Registration} />
        </Switch>
      </main>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
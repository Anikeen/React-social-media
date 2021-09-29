import './Main.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AppRouter from '../../../router/AppRouter';
import Content from '../Content';
import { useSelector } from 'react-redux';
import Sidebar from '../../Menu/Sidebar/Sidebar';

function LayoutMain() {
  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <div className="main-layout">
      <Header/>
      
      <Content className="main-content container">
        {
          isAuth
          ?
          <div className="content-layout">
            <Sidebar/>
            <AppRouter/>
          </div>
          :
          <AppRouter/>
        }
      </Content>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
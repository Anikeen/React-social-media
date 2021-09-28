import './Main.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AppRouter from '../../../router/AppRouter';
import Content from '../Content';

function LayoutMain() {
  return (
    <div className="main-layout">
      <Header/>
      
      <Content className="main-content container">
        <AppRouter/>
      </Content>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
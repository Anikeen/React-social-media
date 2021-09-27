import './Main.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AppRouter from '../../../router/AppRouter';

function LayoutMain() {
  return (
    <div className="main-layout">
      <Header/>

      <main className="main-content container">
        <AppRouter/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default LayoutMain;
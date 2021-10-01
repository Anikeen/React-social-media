import { Link } from 'react-router-dom';
import FormAuthLogin from '../../components/Form/Auth/Login';
import './Home.scss';

function Greeting() {
  return (
    <section className="greeting">
      <h1 className="greeting__title">
        свитер
      </h1>

      <p className="greeting__text">
        Какой-то воодушевляющий текст!
      </p>
    </section>      
  );
}

function Authentication() {
  return (
    <section className="sign-in">
      <FormAuthLogin/>

      <div className="registration-jump">
        <Link className="registration-jump__btn" to="/registration">Создать аккаунт</Link>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="row">
        <Greeting />
        <Authentication/>      
      </div>
    </div>
  );
}

export default Home;
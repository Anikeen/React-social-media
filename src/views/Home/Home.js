import './Home.css';

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

function Home() {
  return (
    <Greeting />
  );
}

export default Home;
import './Footer.scss';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <Copyright/>
      </div>
    </footer>
  );
}

function Copyright() {
  return (
    <div className="copyright">
      Свитер &copy; 2021
    </div>
  );
}

export default Footer;
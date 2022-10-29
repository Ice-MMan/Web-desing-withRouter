import Subscribe from "../components/subscribe/Subscribe";
import Card from "../components/card/Card";
import logo_html from "../assets/img/logo_html.png";
import logo_css from "../assets/img/logo_css.png";
import logo_brush from "../assets/img/logo_brush.png";

const Home = () => {
  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      <Subscribe />
      <section id="boxes">
        <div className="container">
          <Card src={logo_html} title={"HTML5 MARKUP"} url={"/html"} />
          <Card src={logo_css} title={"CSS3 STYLING"} url={"/css"} />
          <Card src={logo_brush} title={"GRAPHIC DESING"} url={"/logo"} />
        </div>
      </section>
    </div>
  );
};

export default Home;

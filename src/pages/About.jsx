 import Navbar from "../components/Navbar";
 function About() {
  return (
    <>
    <Navbar />
    <main>
      <section id="about">
        <div className="container">
          <div className="title">
            <h2>D.S Restaurant HISTORY</h2>
            <p>More than 25+ years of Experience</p>
          </div>
          <div className="about-content">
            <div>
              <p>Welcome to our steak restaurant, where quality and flavor come first.</p>
              <p>We serve carefully selected cuts and offer great experience.</p>
              <a href="#" className="btn btn-secondary">LEARN MORE</a>
            </div>
            <img src="/images/about/ab.jpeg" alt="About us" />
          </div>
        </div>
      </section>
    </main>
    </>
  );

}

export default About;
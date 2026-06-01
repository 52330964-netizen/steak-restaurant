import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <section id="contact">
        <div className="container">
          <div className="contact-content">

            <div className="contact-info">
              <h3>ADDRESS</h3>
              <p>Tripoli, Lebanon</p>

              <h3>WORKING HOURS</h3>
              <p>11:00 am - 11:00 pm</p>
            </div>

            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button className="btn">
                SEND MESSAGE
              </button>
            </form>

          </div>
        </div>
      </section>
    <footer id="footer">
      <p>Copyright © 2026 All rights reserved</p>
    </footer>
      
    </>
  );
}

export default Contact;
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar/>

      <header>
        <div className="content">
          <h1>Welcome to</h1>
          <h2>Fine Dining Experience</h2>
          <p>Savor the flavors of gourmet cuisine in an elegant ambiance</p>

          <input type="checkbox" id="book-toggle" />

          <label htmlFor="book-toggle" className="btn btn-primary">
            book a table
          </label>

          <div className="modal">
            <div className="modal-content">
              <label htmlFor="book-toggle" className="close">
                &times;
              </label>

              <h2>Book a Table</h2>

              <form>
                <input type="text" placeholder="Full Name" required />
                <input type="number" placeholder="Phone Number" required />
                <input type="date" required />
                <input type="time" required />
                <input type="number" placeholder="Number of People" required />
                <button type="submit">Confirm Booking</button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
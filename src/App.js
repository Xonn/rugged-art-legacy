import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/shop"><Shop /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function About() {
  return <h2>À propos</h2>;
}

function Shop() {
  return <h2>Shop</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
export default App;

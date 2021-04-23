import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
  { path: '/', name: 'Accueil', component: Homepage, dark: true },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio, dark: true },
  { path: '/about', name: 'À propos', component: About, dark: false },
  { path: 'https://www.etsy.com/fr/shop/RuggedStore', name: 'Shop', external: true },
  { path: '/contact', name: 'Contact', component: Contact, dark: false },
];

function App() {
  return (
    <div className="App bg-greyDark dark:bg-greyLighter">
      <Router>
        <Navbar routes={routes} />
        <Switch>
          {routes.filter(route => !route.external).map(route => (
            <Route path={route.path} exact render={() => (<route.component dark={route.dark} />)} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

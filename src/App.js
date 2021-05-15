import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Main from './containers/layouts/Main';
import Presentation from './pages/presentation/Presentation';

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
        <Switch>
          <Route path='/presentation' exact render={() => (<Presentation dark='false' />)} />

          <Route>
            <Main exact routes={routes}>
                {routes.filter(route => !route.external).map(route => (
                  <Route path={route.path} exact render={() => (<route.component dark={route.dark} />)} />
                ))}
            </Main>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

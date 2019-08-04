import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const HomePage = lazy(() =>
  import(
    './components/pages/HomePage/HomePage' /* webpackChunkName: "home-page" */
  ),
);

const AboutPage = lazy(() =>
  import(
    './components/pages/AboutPage/AboutPage' /* webpackChunkName: "about-page" */
  ),
);

const PetsPage = lazy(() =>
  import(
    './components/pages/PetsPage/PetsPage' /* webpackChunkName: "pets-page" */
  ),
);

const PetPage = lazy(() =>
  import(
    './components/pages/PetPage/PetPage' /* webpackChunkName: "pet-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import('./components/pages/NotFound' /* webpackChunkName: "not-found" */),
);

const App = () => (
  <div>
    <Nav />

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;

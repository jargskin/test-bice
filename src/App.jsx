/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Components/Config/Routes/routes';
import Header from './Components/Commons/Header/index';
import Footer from './Components/Commons/Footer/index';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Suspense fallback={<div> </div>}>
          <Switch>
            {routes.map((route, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Route {...route} key={key} />
            ))}
          </Switch>
        </Suspense>
        <Footer />
      </>
    </Router>

  );
}

export default App;

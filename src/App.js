import React, { Suspense, lazy }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './components/HomePage.jsx'));


function App() {

  return (
    <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div> }>
             <Header />
                <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="*" component={HomePage} />
                </Switch>
             <Footer />
           </Suspense>
         </Router>
     </div>
  );
 }

export default App;

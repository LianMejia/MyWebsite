import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './../Layout';
import Home from './../Home/Home';
import About from './../About/About';
import Services from './../Services/Services';

function App() {
    return(
        <BrowserRouter>
           <Layout>
               <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/Home" component={Home} />
                   <Route exact path="/About" component={About} />
                   <Route exact path="/Services" component={Services} />
               </Switch>
           </Layout>
        </BrowserRouter>
    );
}

export default App;
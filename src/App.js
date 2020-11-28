import React, {Suspense} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';

const AsyncHome = React.lazy(() => {
   return import('./containers/Home/Home')
});

const AsyncFavourites = React.lazy(() => {
   return import('./containers/Favourites/Favourites')
});

const App = () =>  {
  return (
    <div>
        <Layout>
            <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Route path="/home/:id" render={(props) => <AsyncHome {...props}/>}/>
                    <Route path="/home" render={(props) => <AsyncHome {...props}/>}/>
                    <Route path="/favourite" render={(props) => <AsyncFavourites {...props} />}/>
                    <Redirect to="/home"/>
                </Switch>
            </Suspense>
        </Layout>
    </div>
  );
}

export default App;

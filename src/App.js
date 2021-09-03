import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

function App() {
  return (
  <div>
    <Layout>
      {/* tells React that only one page should be loaded at a time */}
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favourites'>
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  </div>
  )
}

export default App;

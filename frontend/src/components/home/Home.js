import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import PopularArtical from './Popular';
import Search from './Search';
import Category from './Category';
import Tag from './Tag';
import FacebookFollow from './FaceBookFollow';
import HomeArticals from './HomeArticals';
import ArticalDetails from './ArticalDetails';
import CategoryArticals from './CategoryArticals';
import TagArticals from './TagArticals';

const Home = ({ history }) => {
  return (
    <div className="home">
      <Navbar />

      <div className="flex flex-row max-w-7xl px-5 py-2 mx-auto">
        <div className="basis-3/4">
          <Switch>
            <Route path="/" component={HomeArticals} exact />
            <Route
              path="/artical/:currentPage?"
              component={HomeArticals}
              exact
            />
            <Route
              path="/artical/details/:slug"
              component={ArticalDetails}
              exact
            />
            <Route
              path="/artical/category/:categorySlug/:currentPage?"
              component={CategoryArticals}
              exact
            />
            <Route
              path="/artical/tag/:tagSlug/:currentPage?"
              component={TagArticals}
              exact
            />
            <Route
              path="/artical/search/:searchValue"
              component={HomeArticals}
              exact
            />
          </Switch>
        </div>
        <div className="basis-1/4">
          <Search history={history} />
          <Category />
          <Tag />
          <PopularArtical />
          <FacebookFollow />
        </div>
      </div>
    </div>
  );
};

export default Home;

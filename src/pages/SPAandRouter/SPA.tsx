import React, { Component } from 'react';
import styles from './SPA.less';
import About from './About';
import Home from './Home';
import NewPage from './NewPage';

import { NavLink, Route } from 'umi';

class SPA extends Component {
  render() {
    var obj = { name: 'test', age: 18 };
    return (
      <div>
        <div>
          <div>
            <div className={styles.title}>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <NavLink
                to={`/Test/SPAandRouter/about`}
                className={styles.about}
                activeClassName={styles.act}
              >
                About
              </NavLink>
              <NavLink
                to="/Test/SPAandRouter/home"
                className={styles.home}
                activeClassName={styles.act}
              >
                Home
              </NavLink>
              <NavLink
                to={{
                  pathname: `/Test/SPAandRouter/newPage/${obj.age}/${obj.name}`,
                }}
                target="_blank"
                className={styles.home}
                activeClassName={styles.act}
              >
                新页面
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.tip}>
          {/* *注册路由*/}
          <Route path="/Test/SPAandRouter/about" component={About}></Route>
          <Route path="/Test/SPAandRouter/home" component={Home}></Route>
          <Route
            path="/Test/SPAandRouter/newPage/:age/:name"
            component={NewPage}
          ></Route>
          {/* <About/>
                    <Home/> */}
        </div>
      </div>
    );
  }
}

export default SPA;

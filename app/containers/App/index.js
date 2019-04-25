/**
 *
 * App
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import injectSaga from 'utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
// import NotFoundPage from '../NotFoundPage';
import MapPage from '../MapPage';
import { makeSelectAppPage } from './selectors';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  flex: 1 0 auto;
  padding: 0 0rem;
  min-height: calc(100vh - 78px);
`;

class App extends React.Component {
  render() {
    return (
      <>
        <AppWrapper>
          <Helmet
            titleTemplate="%s - Агентский Портал"
            defaultTitle="Агентский Портал"
          >
            <meta name="description" content="Агентский Портал" />
          </Helmet>
          <MainWrapper>
            <Switch>
              <Route component={MapPage} />
            </Switch>
          </MainWrapper>
          <GlobalStyle />
        </AppWrapper>
      </>
    );
  }
}

App.propTypes = {
  // error: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectAppPage(),
});

/* function mapDispatchToProps(dispatch) {
  return {
  };
} */
const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);
// const withSaga = injectSaga({ key: 'global', saga });
const withReducer = injectReducer({ key: 'global', reducer });

export default withRouter(
  compose(
    withReducer,
    //    withSaga,
    withConnect,
  )(App),
);

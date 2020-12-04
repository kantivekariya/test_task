import React, { Suspense } from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router';
import UserComponent from '../components/UserComponent';
import LoadingBar from 'react-redux-loading-bar';

const Loader = () => {
    return (
        <div className={'suspense-loader-fallback'}>
            <span className="loader__ball loader__ball--1" />
            <span className="loader__ball loader__ball--2" />
            <span className="loader__ball loader__ball--3" />
        </div>
    );
};

const Routes = (props) => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                {Boolean(props.loadingBar.default) && <LoadingBar style={{ backgroundColor: '#1ac884',marginTop:'80px' }} />}
                <Switch>
                    <Route exact path="/" component={UserComponent} />
                </Switch>
            </Suspense>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
      loadingBar: state.loadingBar
    };
  };

export default connect(mapStateToProps)(Routes);


import React, {
  Component,
  PropTypes
}                             from 'react';
import {
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';

class App extends Component {

  state = { navModel : navigationModel };

  componentDidMount() {
    window.addEventListener('resize', this.handlesScreenWidthChange);
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this.handlesScreenWidthChange);
  }

  render() {
    const { children } = this.props;
    return (
      <div id="appContainer">
        <div className="container-fluid">
          {children}
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handlesScreenWidthChange = () => {
    const { screenWidthChange } = this.props;
    if (screenWidthChange) {
      screenWidthChange();
    }
  }
}

// statics :
App.propTypes = {
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object,
  screenWidthChange: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    currentView:  state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as charactersActions from '../../redux/modules/characters';
import { Home }               from '../../views';


const mapStateToProps = (state) => {
  return {
    // view store:
    currentView: state.views.currentView,

    // characters store:
    lastRefresh: state.characters.time,
    isFetchingAllChars: state.characters.isFetching,
    characters: state.characters.characters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // view actions:
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome,
      // characters actions:
      getAllCharacters: charactersActions.getAllCharactersIfNeeded
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

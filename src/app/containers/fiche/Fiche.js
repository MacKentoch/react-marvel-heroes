import { connect }                  from 'react-redux';
import { bindActionCreators }       from 'redux';
import * as viewsActions            from '../../redux/modules/views';
import * as characterDetailsActions from '../../redux/modules/characterDetails';
import { Fiche }                    from '../../views';


const mapStateToProps = (state) => {
  return {
    // view store:
    currentView:  state.views.currentView,
    // characterDetails store:
    lastRefresh: state.characterDetails.time,
    isFetching: state.characterDetails.isFetching,
    id: state.characterDetails.id,
    name: state.characterDetails.name,
    description: state.characterDetails.description,
    thumbnail: state.characterDetails.thumbnail,
    comics: state.characterDetails.comics,
    series: state.characterDetails.series
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // view actions:
      enterFiche: viewsActions.enterFiche,
      leaveFiche: viewsActions.leaveFiche,
      // characters actions:
      getCharacterDetails: characterDetailsActions.getCharacterDetailsIfNeeded
    },
    dispatch
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Fiche);

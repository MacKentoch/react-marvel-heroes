import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import {
  DetailsTitle,
  DetailsTable,
  Spacer
}                     from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router';


class Fiche extends PureComponent {
  state = {
    animated: true,
    viewEntersAnim: true,
    isLoading: true
  };

  componentDidMount() {
    const {
      params: { id },
      enterFiche,
      getCharacterDetails
    } = this.props;
    enterFiche();
    getCharacterDetails(id);
    const { screenWidthChange } = this.props;
    screenWidthChange();
  }

  componentWillUnmount() {
    const { leaveFiche } = this.props;
    leaveFiche();
  }

  render() {
    const {
      animated,
      viewEntersAnim
    } = this.state;

    const {
      isFetching,
      name,
      description,
      thumbnail: { path, extension },
      comics,
      series
    } = this.props;

    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <div className="page-header">
          <h1 className="page_title">
            Fiche identité :
          </h1>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link
              className="btn btn-default"
              to="/">
              <i
                className="fa fa-chevron-left"
                aria-hidden="true"
              />
              <i style={{ marginLeft: '10px' }}>
                retour à la liste
              </i>
            </Link>
            <Spacer />
            {
              isFetching &&
              <div className="row">
                <div className="col-md-2">
                  <div className="well loading_fake_img" />
                </div>
                <div className="col-md-10">
                  <DetailsTitle
                    name={' ... '}
                    description={' ...  '}
                  />
                  <p>
                    Loading...
                  </p>
                </div>
              </div>
            }
            {
              !isFetching &&
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="img-responsive"
                    src={`${path}.${extension}`}
                    alt={name}
                  />
                </div>
                <div className="col-md-10">
                  <DetailsTitle
                    name={name}
                    description={description}
                  />
                  <DetailsTable
                    title="Comics"
                    rows={comics}
                  />
                  <Spacer height={30} />
                  <DetailsTable
                    title="Series"
                    rows={series}
                  />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

Fiche.propTypes = {
  // router:
  params: PropTypes.object,
  // view:
  currentView:  PropTypes.string.isRequired,
  enterFiche:   PropTypes.func.isRequired,
  leaveFiche:   PropTypes.func.isRequired,
  // character details:
  lastRefresh:  PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    path: PropTypes.string,
    extension: PropTypes.string
  }),
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      resourceURI: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      resourceURI: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  getCharacterDetails: PropTypes.func.isRequired,
  // screen:
  screenWidth: PropTypes.number.isRequired,
  screenWidthChange: PropTypes.func.isRequired
};

export default Fiche;

import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import {
  Card,
  Spacer,
  CardSizeCommand
}                     from '../../components';
import FlipMove       from 'react-flip-move';
import cx             from 'classnames';

class Home extends PureComponent {
  state = {
    animated: true,
    viewEntersAnim: true,
    cardSize: 2
  };

  componentDidMount() {
    window.addEventListener('resize', this.handlesScreenWidthChange);
  }

  componentWillUnMount() {
    window.removeEventListener('resize', this.handlesScreenWidthChange);
  }

  componentDidMount() {
    const { enterHome, getAllCharacters } = this.props;
    enterHome();
    getAllCharacters();
    const { screenWidthChange } = this.props;
    screenWidthChange();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    const {
      animated,
      viewEntersAnim,
      cardSize
    } = this.state;

    const {
      characters,
      screenWidth,
      screenWidthChange
    } = this.props;

    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <div className="page-header">
          <h1 className="page_title">
            Liste des superhéros :
          </h1>
        </div>

        <CardSizeCommand
          cardSize={cardSize}
          onCardSizeChange={this.handlesOnCardSizeChange}
        />

        <Spacer />
        <div className="row">
          <div className="col-md-10 col-md-offset-1 no_list_style">
              <FlipMove
                staggerDurationBy="30"
                duration={400}
                typeName="ul"
                staggerDelayBy={2}>
              {
                characters.map(
                  ({id, name, thumbnail: { path, extension }, urls }, cardIdx) => (
                    <Card
                      key={cardIdx}
                      id={id}
                      name={name}
                      picture={`${path}.${extension}`}
                      cardSize={cardSize}
                      urls={urls}
                      onDetailClick={this.handlesOnDetailsClick}
                      screenWidth={screenWidth}
                      screenWidthChange={screenWidthChange}
                    />
                  )
                )
              }
              </FlipMove>
          </div>
       </div>
      </div>
    );
  }

  handlesOnCardSizeChange = (cardSize) => {
    this.setState({ cardSize });
  }

  handlesScreenWidthChange = () => {
    const { screenWidthChange } = this.props;
    if (screenWidthChange) {
      screenWidthChange();
    }
  }
}

Home.propTypes = {
  // view:
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired,
  // characters:
  lastRefresh:  PropTypes.string.isRequired,
  isFetchingAllChars: PropTypes.bool.isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string
      })
    })
  ).isRequired,
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['detail', 'wiki', 'comiclink']),
      url: PropTypes.string
    })
  ),
  getAllCharacters: PropTypes.func.isRequired,
  // screen:
  screenWidth: PropTypes.number.isRequired,
  screenWidthChange: PropTypes.func.isRequired
};

export default Home;

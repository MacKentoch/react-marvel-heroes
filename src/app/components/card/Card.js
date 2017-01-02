import React, {PureComponent, PropTypes} from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

class Card extends PureComponent {
  render() {
    const { id, name, picture, cardSize, urls, screenWidth } = this.props;

    const wikiUrl = Array.isArray(urls)
    ? urls.find(item => item.type === 'wiki')
    : '';

    const comiclinkUrl = Array.isArray(urls)
    ? urls.find(item => item.type === 'comiclink')
    : '';

    let cardSizeAdjust = screenWidth < '1920' ? '240px' : '350px';
    if (cardSize === 1) {
      cardSizeAdjust = `${screenWidth / 5}px`;
    }
    if (cardSize === 2) {
      cardSizeAdjust = `${screenWidth / 4}px`;
    }
    if (cardSize === 3) {
      cardSizeAdjust = `${screenWidth / 2.46}px`;
    }

    return (
      <li
        className={cx({
          'col-xs-3': cardSize === 1,
          'col-xs-4': cardSize === 2,
          'col-xs-6': cardSize === 3
        })}
        style={{ zIndex: 100 }}>
        <div className="card">
          <div
            className="card-image"
            style={{
              maxHeight: cardSizeAdjust,
              minHeight: cardSizeAdjust
            }}>
            <img
              className="img-responsive"
              src={picture}
            />
          </div>

          <div className="card-content">
            <p>
              { name }
            </p>
          </div>

          <div className="card-action">
            <Link
              className="btn btn-link btn-vp"
              to={`/fiche/${id}`}>
              <i className="fa fa-id-card-o" aria-hidden="true" />
              &nbsp;
              detail
            </Link>
            {
              Array.isArray(urls) && urls.length > 0 &&
              <div>
                {
                  wikiUrl &&
                  <a
                    className="btn btn-link btn-vp"
                    href={wikiUrl.url}>
                    <i className="fa fa-wikipedia-w" aria-hidden="true" />
                    &nbsp;
                    wiki
                  </a>
                }
                {
                  comiclinkUrl &&
                  <a
                    className="btn btn-link btn-vp"
                    href={comiclinkUrl.url}>
                    <i className="fa fa-book" aria-hidden="true" />
                    &nbsp;
                    comiclink
                  </a>
                }
              </div>
            }
          </div>
        </div>
      </li>
    );
  }
}
Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  picture: PropTypes.string,
  cardSize: PropTypes.oneOf([1, 2, 3]),
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['detail', 'wiki', 'comiclink']),
      url: PropTypes.string
    })
  ),
  screenWidth: PropTypes.number.isRequired,
  screenWidthChange: PropTypes.func.isRequired
};

Card.defaultProps = {
  name: '',
  cardSize: 1
};

export default Card;

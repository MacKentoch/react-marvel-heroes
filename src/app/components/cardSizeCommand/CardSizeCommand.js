import React, {PureComponent, PropTypes} from 'react';
import cx from 'classnames';

class CardSizeCommand extends PureComponent {
  render() {
    const { cardSize } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <span style={{fontSize: '18px', marginRight: '10px'}}>
            <i className="fa fa-cogs" aria-hidden="true" />
            &nbsp;
            change cards sizes:
          </span>
          <div className="btn-group block-center">
            <a
              className={
                cx({
                  btn: true,
                  'btn-primary': true,
                  active: cardSize === 1
                })
              }
              href="#"
              onClick={this.setSizeSmall}>
              small size
            </a>
            <a
              className={
                cx({
                  btn: true,
                  'btn-primary': true,
                  active: cardSize === 2
                })
              }
              href="#"
              onClick={this.setSizeMid}>
              mid size
            </a>
            <a
              className={
                cx({
                  btn: true,
                  'btn-primary': true,
                  active: cardSize === 3
                })
              }
              href="#"
              onClick={this.setSizeLarge}>
              large size
            </a>
          </div>
        </div>
      </div>
    );
  }

  setSizeSmall = (event) => {
    event.preventDefault();
    const { onCardSizeChange } = this.props;
    onCardSizeChange(1);
  }

  setSizeMid = (event) => {
    event.preventDefault();
    const { onCardSizeChange } = this.props;
    onCardSizeChange(2);
  }

  setSizeLarge = (event) => {
    event.preventDefault();
    const { onCardSizeChange } = this.props;
    onCardSizeChange(3);
  }
}
CardSizeCommand.propTypes = {
  cardSize: PropTypes.oneOf([1, 2, 3]),
  onCardSizeChange: PropTypes.func.isRequired
};

CardSizeCommand.defaultProps = {
  cardSize: 1
};

export default CardSizeCommand;

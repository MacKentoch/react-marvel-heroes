import React, { PropTypes } from 'react';

const DetailsTable = ({ title, rows }) => {
  return (
    <div>
      <h4>
        { title }
      </h4>
      <table className="table">
        <tbody>
          {
            rows.length === 0
            ?
              <tr>
                <td className="row_details">
                  { '...' }
                </td>
              </tr>
            :
              rows.map(
                ({ name }, rowIdx) => (
                  <tr key={ rowIdx }>
                    <td className="row_details">
                      { name }
                    </td>
                  </tr>
                )
              )
          }
        </tbody>
      </table>
    </div>
  );
};

DetailsTable.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      resourceURI: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default DetailsTable;

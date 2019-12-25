import React from 'react';
import { css } from '@emotion/core';
// First way to import
// Another way to import. This is recommended to reduce bundle size
import GridLoader from 'react-spinners/GridLoader';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    padding-top: 20%;
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <GridLoader
          css={override}
          sizeUnit={"px"}
          size={25}
          color={'#595959'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Spinner;
import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { imgInfos } = this.props;
    return <img src={imgInfos.source} alt={imgInfos.alternativeText} />;
  }
}

export default Image;
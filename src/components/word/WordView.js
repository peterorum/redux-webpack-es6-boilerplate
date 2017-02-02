import React, { Component } from 'react';

import WordLayout from './WordLayout';

export default class WordView extends Component {
  render() {
    return (
      <div>
        <WordLayout {...this.props} />
      </div>
    );
  }
}

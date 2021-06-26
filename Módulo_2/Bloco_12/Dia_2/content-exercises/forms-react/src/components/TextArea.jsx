import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

class TextArea extends React.Component {
  constructor() {
    super();
    this.state = {
      textareaValue: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ textareaValue: event.target.value });
  }

  render() {
    const { name, id, label } = this.props;
    const { textareaValue } = this.state;
    return (
      /** Fonte: https://stackoverflow.com/questions/62306461/label-must-have-associated-control */
      <label className="textarea-label-form" htmlFor={ id }>
        { label }
        <textarea
          className="textarea-form"
          name={ name }
          id={ id }
          value={ textareaValue }
          onChange={ this.handleOnChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = PropTypes.exact({
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
}).isRequired;

export default TextArea;

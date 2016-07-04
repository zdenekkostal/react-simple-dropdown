import React, { createClass, PropTypes } from 'react';

const DropdownTrigger = createClass({
  displayName: 'DropdownTrigger',

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string
  },

  getDefaultProps () {
    return {
      className: '',
      tagName: 'a'
    };
  },

  render () {
    const { children, className, tagName } = this.props;
    const props = {
      ...this.props,
      className: `dropdown__trigger ${className}`
    };

    return (
      <tagName {...props}>
        {children}
      </tagName>
    );
  }
});

export default DropdownTrigger;

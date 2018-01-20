'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Label with required field display, htmlFor, and block styling */
function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required;

  return _react2.default.createElement(
    'label',
    { style: { display: 'block' }, htmlFor: htmlFor },
    label,
    ' ',
    required && _react2.default.createElement(
      'span',
      { style: { color: 'red' } },
      ' *'
    )
  );
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: _propTypes2.default.string.isRequired,

  /** Label text */
  label: _propTypes2.default.string.isRequired,

  /** Display asterisk after label if true */
  required: _propTypes2.default.bool
};

exports.default = Label;
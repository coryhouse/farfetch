'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** A super lame component that says Hello with a custom message. */
function HelloWorld(_ref) {
  var message = _ref.message;

  return _react2.default.createElement(
    'div',
    null,
    'Hello ',
    message
  );
}

HelloWorld.propTypes = {
  /** Message to display */
  message: _propTypes2.default.string
};

HelloWorld.defaultProps = {
  message: 'World'
};

exports.default = HelloWorld;
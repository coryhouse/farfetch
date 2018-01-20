'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _textInput = require('./textInput.css');

var _textInput2 = _interopRequireDefault(_textInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput(_ref) {
  var htmlId = _ref.htmlId,
      name = _ref.name,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? "text" : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === undefined ? false : _ref$required,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['htmlId', 'name', 'label', 'type', 'required', 'onChange', 'placeholder', 'value', 'error', 'children']);

  return _react2.default.createElement(
    'div',
    { className: _textInput2.default.fieldset },
    _react2.default.createElement(_Label2.default, { htmlFor: htmlId, label: label, required: required }),
    _react2.default.createElement('input', Object.assign({
      id: htmlId,
      type: type,
      name: name,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      className: error && _textInput2.default.inputError
    }, props)),
    children,
    error && _react2.default.createElement(
      'div',
      { className: _textInput2.default.error },
      error
    )
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: _propTypes2.default.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: _propTypes2.default.string.isRequired,

  /** Input label */
  label: _propTypes2.default.string.isRequired,

  /** Input type */
  type: _propTypes2.default.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: _propTypes2.default.bool,

  /** Function to call onChange */
  onChange: _propTypes2.default.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: _propTypes2.default.string,

  /** Value */
  value: _propTypes2.default.any,

  /** String to display when error occurs */
  error: _propTypes2.default.string,

  /** Child component to display next to the input */
  children: _propTypes2.default.node
};

exports.default = TextInput;
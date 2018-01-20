'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProgressBar = require('../ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _EyeIcon = require('../EyeIcon');

var _EyeIcon2 = _interopRequireDefault(_EyeIcon);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Password input with integrated label, quality tips, and show password toggle. */
var PasswordInput = function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  function PasswordInput(props) {
    _classCallCheck(this, PasswordInput);

    var _this = _possibleConstructorReturn(this, (PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).call(this, props));

    _this.toggleShowPassword = function (event) {
      _this.setState(function (prevState) {
        return { showPassword: !prevState.showPassword };
      });
      if (event) event.preventDefault();
    };

    _this.state = {
      showPassword: false
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          htmlId = _props.htmlId,
          value = _props.value,
          label = _props.label,
          error = _props.error,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          maxLength = _props.maxLength,
          showVisibilityToggle = _props.showVisibilityToggle,
          quality = _props.quality,
          props = _objectWithoutProperties(_props, ['htmlId', 'value', 'label', 'error', 'onChange', 'placeholder', 'maxLength', 'showVisibilityToggle', 'quality']);

      var showPassword = this.state.showPassword;


      return _react2.default.createElement(
        _TextInput2.default,
        Object.assign({
          htmlId: htmlId,
          label: label,
          placeholder: placeholder,
          type: showPassword ? 'text' : 'password',
          onChange: onChange,
          value: value,
          maxLength: maxLength,
          error: error,
          required: true
        }, props),
        showVisibilityToggle && _react2.default.createElement(
          'a',
          {
            href: '',
            onClick: this.toggleShowPassword,
            style: { marginLeft: 5 } },
          _react2.default.createElement(_EyeIcon2.default, null)
        ),
        value.length > 0 && quality && _react2.default.createElement(_ProgressBar2.default, { percent: quality, width: 130 })
      );
    }
  }]);

  return PasswordInput;
}(_react2.default.Component);

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: _propTypes2.default.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: _propTypes2.default.string.isRequired,

  /** Password value */
  value: _propTypes2.default.any,

  /** Input label */
  label: _propTypes2.default.string,

  /** Function called when password input value changes */
  onChange: _propTypes2.default.func.isRequired,

  /** Max password length accepted */
  maxLength: _propTypes2.default.number,

  /** Placeholder displayed when no password is entered */
  placeholder: _propTypes2.default.string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: _propTypes2.default.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: _propTypes2.default.number,

  /** Validation error to display */
  error: _propTypes2.default.string
};

PasswordInput.defaultProps = {
  maxLength: 50,
  showVisibilityToggle: false,
  label: 'Password'
};

exports.default = PasswordInput;
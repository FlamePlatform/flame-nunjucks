"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlameNunjucks = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _flameresponse = require("flameresponse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
  var nunjucks = require('nunjucks');
} catch (_) {
  nunjucks = require("parent-require")("nunjucks");
}

var FlameNunjucks = exports.FlameNunjucks = (function (_HTMLResponse) {
  (0, _inherits3.default)(FlameNunjucks, _HTMLResponse);

  function FlameNunjucks(req, res) {
    (0, _classCallCheck3.default)(this, FlameNunjucks);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FlameNunjucks).call(this, req, res));
  }

  (0, _createClass3.default)(FlameNunjucks, [{
    key: "send",
    value: function send(view, data) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(FlameNunjucks.prototype), "send", this).call(this, nunjucks.render(view, data));
    }
  }, {
    key: "render",
    value: function render(view, data) {
      this.send(view, data);
    }
  }]);
  return FlameNunjucks;
})(_flameresponse.HTMLResponse);
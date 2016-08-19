webpackHotUpdate(0,{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var img = document.createElement('img');
	img.src = __webpack_require__(180);

	__webpack_require__(181);

	var FooterComponent = function (_React$Component) {
	  _inherits(FooterComponent, _React$Component);

	  function FooterComponent(props) {
	    _classCallCheck(this, FooterComponent);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FooterComponent).call(this, props));

	    _this.state = { link: "www.linkedin.com" };
	    //   this.onLike = this.onLike.bind(this);
	    return _this;
	  }

	  // onLike () {
	  //   let newLikesCount = this.state.likesCount + 1;
	  //   this.setState({likesCount: newLikesCount});
	  // }

	  _createClass(FooterComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'footer' },
	        _react2.default.createElement(
	          'div',
	          { className: 'footer__left' },
	          _react2.default.createElement(
	            'div',
	            { className: 'footer__left' },
	            _react2.default.createElement(
	              'a',
	              { href: '{this.state.link}' },
	              'link 11'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '{this.state.link}' },
	              'link 2'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'footer__right' },
	          _react2.default.createElement(
	            'a',
	            { href: '{this.state.link}' },
	            'link 3'
	          ),
	          _react2.default.createElement(
	            'a',
	            { href: '{this.state.link}' },
	            'link 4'
	          ),
	          _react2.default.createElement('img', { className: 'footer__logo', src: './public/img/donot.jpg' })
	        )
	      );
	    }
	  }]);

	  return FooterComponent;
	}(_react2.default.Component);

	exports.default = FooterComponent;

/***/ }

})
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyConverter = function (_React$Component) {
    _inherits(CurrencyConverter, _React$Component);

    function CurrencyConverter(props) {
        _classCallCheck(this, CurrencyConverter);

        var _this = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

        _this.state = {
            rate: 0.70,
            usd: 1,
            gbp: 1 * 0.70
        };

        _this.handleUsdChange = _this.handleUsdChange.bind(_this);
        _this.handleGbpChange = _this.handleGbpChange.bind(_this);
        return _this;
    }

    _createClass(CurrencyConverter, [{
        key: "toUsd",
        value: function toUsd(amount, rate) {
            return amount * (1 / rate);
        }
    }, {
        key: "toGbp",
        value: function toGbp(amount, rate) {
            return amount * rate;
        }
    }, {
        key: "conversion",
        value: function conversion(amount, rate, equation) {
            var userInput = parseFloat(amount);
            if (Number.isNaN(userInput)) {
                return '';
            }
            return equation(userInput, rate).toFixed(2);
        }
    }, {
        key: "handleUsdChange",
        value: function handleUsdChange(e) {
            var gbp = this.conversion(e.target.value, this.state.rate, this.toGbp);
            this.setState({
                usd: e.target.value,
                gbp: gbp
            });
        }
    }, {
        key: "handleGbpChange",
        value: function handleGbpChange(e) {
            var usd = this.conversion(e.target.value, this.state.rate, this.toUsd);
            this.setState({
                gbp: e.target.value,
                usd: usd
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                rate = _state.rate,
                usd = _state.usd,
                gbp = _state.gbp;


            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "table" },
                    React.createElement(
                        "div",
                        { className: "text-center p-3 mb-2" },
                        React.createElement(
                            "h3",
                            { className: "mb-2" },
                            "Currency",
                            React.createElement(
                                "span",
                                { className: "heading" },
                                "Converter"
                            )
                        ),
                        React.createElement(
                            "h3",
                            { className: "heading-rate" },
                            "USD 1 : ",
                            rate,
                            " GBP"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row text-center" },
                        React.createElement(
                            "div",
                            { className: "col-12" },
                            React.createElement(
                                "span",
                                { className: "mr-1" },
                                "USD"
                            ),
                            React.createElement("input", { value: usd, onChange: this.handleUsdChange, type: "number" }),
                            React.createElement(
                                "span",
                                { className: "mx-3" },
                                "="
                            ),
                            React.createElement("input", { value: gbp, onChange: this.handleGbpChange, type: "number" }),
                            React.createElement(
                                "span",
                                { className: "ml-1" },
                                "GBP"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.querySelector("#root"));
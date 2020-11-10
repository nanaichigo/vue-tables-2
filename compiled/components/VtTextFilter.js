"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTextFilter = _interopRequireDefault(require("./renderless/RLTextFilter"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTextFilter',
  props: {
    column: {
      required: true,
      type: String
    }
  },
  components: {
    RLTextFilter: _RLTextFilter["default"]
  },
  render: function render() {
    var _this = this;

    return (0, _vue.h)(_RLTextFilter["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("input", {
          "onKeyup": props.search(props.debounce),
          "class": props.theme.input,
          "name": props.name,
          "type": "text",
          "placeholder": props.display('filterBy', {
            column: props.getHeading(_this.column)
          }),
          "autocomplete": "off"
        }, null);
      }
    });
  }
};
exports["default"] = _default2;
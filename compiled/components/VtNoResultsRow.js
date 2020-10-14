"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLNoResultsRow = _interopRequireDefault(require("./renderless/RLNoResultsRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtNoResultsRow',
  components: {
    RLNoResultsRow: _RLNoResultsRow["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-no-results-row"), {
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("tr", {
            "class": "VueTables__no-results"
          }, [(0, _vue.createVNode)("td", {
            "class": "text-center",
            "tabindex": props.tabIndex,
            "colspan": props.colspan
          }, [props.display(props.message)])]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLSortControl = _interopRequireDefault(require("./renderless/RLSortControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtSortControl',
  components: {
    RLSortControl: _RLSortControl["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-sort-control"), {
      "scopedSlots": {
        "default": function _default(props) {
          return props.sortable ? props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("span", {
            "class": props["class"]
          }, null) : '';
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
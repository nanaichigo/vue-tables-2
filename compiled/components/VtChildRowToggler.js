"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLChildRowToggler = _interopRequireDefault(require("./renderless/RLChildRowToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtChildRowToggler',
  props: ['rowId'],
  components: {
    RLChildRowToggler: _RLChildRowToggler["default"]
  },
  render: function render(h) {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-child-row-toggler"), {
      "row-id": this.rowId,
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("td", {
            "tabindex": props.tabIndex,
            "on-keypress": function onKeypress(e) {
              if (e.key === 'Enter') {
                props.toggle();
              }
            },
            "on-click": props.toggle
          }, [(0, _vue.createVNode)("span", {
            "class": "VueTables__child-row-toggler " + props["class"]()
          }, null)]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
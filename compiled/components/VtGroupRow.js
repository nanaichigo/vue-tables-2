"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLGroupRow = _interopRequireDefault(require("./renderless/RLGroupRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGroupRow',
  components: {
    RLGroupRow: _RLGroupRow["default"]
  },
  props: ['row'],
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-group-row"), {
      "row": this.row,
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("tr", {
            "class": props.theme.groupTr,
            "on-click": props.toggleGroupDirection
          }, [(0, _vue.createVNode)("td", {
            "colspan": props.colspan
          }, [props.canToggleGroup ? (0, _vue.createVNode)("button", {
            "class": props.theme.button,
            "on-click": props.toggleGroup.bind(this, props.groupValue)
          }, [props.groupValue, (0, _vue.createVNode)("span", {
            "class": props.groupToggleIcon(props.groupValue)
          }, null)]) : '', !props.canToggleGroup ? (0, _vue.createVNode)("span", null, [props.groupValue]) : '', props.slot])]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
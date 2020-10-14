"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableHeading = _interopRequireDefault(require("./renderless/RLTableHeading"));

var _VtSortControl = _interopRequireDefault(require("./VtSortControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableHeading',
  props: ['column'],
  components: {
    RLTableHeading: _RLTableHeading["default"],
    VtSortControl: _VtSortControl["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table-heading"), {
      "column": this.column,
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("th", {
            "on-keypress": props.thEvents.keypress,
            "on-click": props.thEvents.click,
            "class": props.thAttrs["class"],
            "title": props.thAttrs.title,
            "tabindex": props.thAttrs.tabIndex
          }, [(0, _vue.createVNode)("span", {
            "class": "VueTables__heading",
            "title": props.title
          }, [props.heading]), (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-sort-control"), null, null)]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
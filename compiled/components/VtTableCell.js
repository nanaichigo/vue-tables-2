"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableCell = _interopRequireDefault(require("./renderless/RLTableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableCell',
  props: ['column'],
  components: {
    RLTableCell: _RLTableCell["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table-cell"), {
      "column": this.column,
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("td", {
            "tabindex": props.tabIndex,
            "class": props.classes
          }, [props.content]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
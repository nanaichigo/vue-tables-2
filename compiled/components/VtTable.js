"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTable = _interopRequireDefault(require("./renderless/RLTable"));

var _VtTableHead = _interopRequireDefault(require("./VtTableHead"));

var _VtTableBody = _interopRequireDefault(require("./VtTableBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTable',
  components: {
    RLTable: _RLTable["default"],
    VtTableHead: _VtTableHead["default"],
    VtTableBody: _VtTableBody["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table"), {
      "scopedSlots": {
        "default": function _default(props) {
          var caption = props.caption ? (0, _vue.createVNode)("caption", null, [props.caption]) : '';
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("table", {
            "class": props.tableAttrs["class"],
            "summary": props.tableAttrs.summary
          }, [caption, (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table-head"), null, null), props.slots.beforeBody, (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table-body"), {
            "ref": "vt_table_body"
          }, null), props.slots.afterBody]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
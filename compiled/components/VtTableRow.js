"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableRow = _interopRequireDefault(require("./renderless/RLTableRow"));

var _VtTableCell = _interopRequireDefault(require("./VtTableCell"));

var _VtChildRowToggler = _interopRequireDefault(require("./VtChildRowToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableRow',
  props: ['row', 'index'],
  components: {
    RLTableRow: _RLTableRow["default"],
    VtTableCell: _VtTableCell["default"],
    VtChildRowToggler: _VtChildRowToggler["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table-row"), {
      "row": this.row,
      "index": this.index,
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("tr", (0, _vue.mergeProps)({
            "class": "VueTables__row " + props.rowAttrs["class"]
          }, {
            attrs: props.rowAttrs.attrs
          }, {
            "on-click": props.rowEvents.click
          }), [props.childRowTogglerFirst ? (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-child-row-toggler"), {
            "row-id": props.rowId
          }, null) : '', props.columns.map(function (column) {
            return (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table-cell"), {
              "column": column
            }, null);
          }), props.childRowTogglerLast ? (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-child-row-toggler"), {
            "row-id": props.rowId
          }, null) : '']);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
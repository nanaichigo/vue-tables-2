"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableHead = _interopRequireDefault(require("./renderless/RLTableHead"));

var _VtHeadingsRow = _interopRequireDefault(require("./VtHeadingsRow"));

var _VtFiltersRow = _interopRequireDefault(require("./VtFiltersRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableHead',
  components: {
    RLTableHead: _RLTableHead["default"],
    VtHeadingsRow: _VtHeadingsRow["default"],
    VtFiltersRow: _VtFiltersRow["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table-head"), {
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("thead", null, [props.slots.prependHead, (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-headings-row"), null, null), props.slots.beforeFilters, props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-filters-row"), null, null) : '', props.slots.afterFilters]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
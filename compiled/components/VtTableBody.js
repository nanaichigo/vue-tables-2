"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLTableBody = _interopRequireDefault(require("./renderless/RLTableBody"));

var _VtNoResultsRow = _interopRequireDefault(require("./VtNoResultsRow"));

var _VtTableRow = _interopRequireDefault(require("./VtTableRow"));

var _VtGroupRow = _interopRequireDefault(require("./VtGroupRow"));

var _VtChildRow = _interopRequireDefault(require("./VtChildRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtTableBody',
  components: {
    RLTableBody: _RLTableBody["default"],
    VtNoResultsRow: _VtNoResultsRow["default"],
    VtTableRow: _VtTableRow["default"],
    VtChildRow: _VtChildRow["default"],
    VtGroupRow: _VtGroupRow["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-table-body"), {
      "scopedSlots": {
        "default": function _default(props) {
          var rows = [];
          var currentGroup;
          props.data.forEach(function (row, index) {
            if (props.groupBy && props.source === 'client' && row[props.groupBy] !== currentGroup) {
              rows.push((0, _vue.createVNode)((0, _vue.resolveComponent)("vt-group-row"), {
                "row": row
              }, null));
              currentGroup = row[props.groupBy];
            }

            if (props.canToggleGroups && props.collapsedGroups.includes(currentGroup)) {
              return;
            }

            rows.push((0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table-row"), {
              "row": row,
              "index": props.initialIndex + index + 1
            }, null));

            if (props.hasChildRow && props.openChildRows.includes(row[props.uniqueRowId])) {
              rows.push((0, _vue.createVNode)((0, _vue.resolveComponent)("vt-child-row"), {
                "row": row,
                "index": props.initialIndex + index + 1
              }, null));
            }
          });
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("tbody", null, [props.slots.prependBody, props.data.length === 0 ? (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-no-results-row"), null, null) : '', rows, props.slots.appendBody]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
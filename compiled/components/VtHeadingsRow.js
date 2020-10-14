"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLHeadingsRow = _interopRequireDefault(require("./renderless/RLHeadingsRow"));

var _VtTableHeading = _interopRequireDefault(require("./VtTableHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtHeadingsRow',
  components: {
    RLHeadingsRow: _RLHeadingsRow["default"],
    VtTableHeading: _VtTableHeading["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-headings-row"), {
      "scopedSlots": {
        "default": function _default(props) {
          if (props.override) {
            return h(props.override, {
              attrs: {
                props: props
              }
            });
          }

          var headings = [];

          if (props.childRowTogglerFirst) {
            headings.push((0, _vue.createVNode)("th", null, null));
          }

          props.columns.map(function (column) {
            headings.push((0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table-heading"), {
              "column": column
            }, null));
          });

          if (props.childRowTogglerLast) {
            headings.push((0, _vue.createVNode)("th", null, null));
          }

          return (0, _vue.createVNode)("tr", null, [headings]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
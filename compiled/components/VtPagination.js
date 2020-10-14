"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLPagination = _interopRequireDefault(require("./renderless/RLPagination"));

var _vuePagination = _interopRequireDefault(require("vue-pagination-2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtPagination',
  components: {
    RLPagination: _RLPagination["default"],
    Pagination: _vuePagination["default"]
  },
  render: function render(h) {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-pagination"), {
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)((0, _vue.resolveComponent)("pagination"), {
            "options": props.optionsObj,
            "records": props.records,
            "per-page": props.perPage,
            "value": props.page,
            "onInput": function onInput(page) {
              return props.setPage(page);
            }
          }, null);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
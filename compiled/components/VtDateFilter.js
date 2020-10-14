"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLDateFilter = _interopRequireDefault(require("./renderless/RLDateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtDateFilter',
  props: ['column'],
  components: {
    RLDateFilter: _RLDateFilter["default"]
  },
  render: function render(h) {
    var _this = this;

    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-date-filter"), {
      "column": this.column,
      "scopedSlots": {
        "default": function _default(props) {
          return props.overide ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables__date-filter",
            "id": 'VueTables__' + _this.column + '-filter'
          }, [(0, _vue.createVNode)("span", {
            "class": "VueTables__filter-placeholder"
          }, [props.placeholder])]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLDateFilter = _interopRequireDefault(require("./renderless/RLDateFilter"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtDateFilter',
  props: ['column'],
  components: {
    RLDateFilter: _RLDateFilter["default"]
  },
  render: function render() {
    var _this = this;

    return (0, _vue.h)(_RLDateFilter["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        return props.overide ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("div", {
          "class": "VueTables__date-filter",
          "id": 'VueTables__' + _this.column + '-filter'
        }, [(0, _vue.createVNode)("span", {
          "class": "VueTables__filter-placeholder"
        }, [props.placeholder])]);
      }
    });
  }
};
exports["default"] = _default2;
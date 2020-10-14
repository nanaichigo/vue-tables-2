"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLListFilter = _interopRequireDefault(require("./renderless/RLListFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtListFilter',
  props: ['column'],
  components: {
    RLListFilter: _RLListFilter["default"]
  },
  render: function render() {
    var _this = this;

    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-list-filter"), {
      "column": this.column,
      "scopedSlots": {
        "default": function _default(props) {
          var options = [];
          var selected;
          props.items.map(function (option) {
            selected = String(option.id) === String(props.query[_this.column]) && props.query[_this.column] !== '';
            options.push((0, _vue.createVNode)("option", {
              "value": option.id,
              "selected": selected
            }, [option.text]));
          });
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables__list-filter",
            "id": 'VueTables__' + _this.column + '-filter'
          }, [(0, _vue.createVNode)("select", {
            "class": props.theme.select,
            "on-change": props.search(false),
            "name": props.name,
            "value": props.value
          }, [(0, _vue.createVNode)("option", {
            "value": ""
          }, [props.defaultOption]), options])]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
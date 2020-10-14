"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLColumnsDropdown = _interopRequireDefault(require("./renderless/RLColumnsDropdown"));

var _dropdownWrapper = _interopRequireDefault(require("./dropdown-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtColumnsDropdown',
  components: {
    RLColumnsDropdown: _RLColumnsDropdown["default"]
  },
  render: function render(h) {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-columns-dropdown"), {
      "scopedSlots": {
        "default": function _default(props) {
          if (props.override) {
            return h(props.override, {
              attrs: {
                props: props
              }
            });
          }

          var content;
          var cols = props.origColumns.map(function (column) {
            content = (0, _vue.createVNode)("a", {
              "class": props.theme.dropdown.item,
              "href": "#",
              "onClick": function onClick() {
                return props.toggleColumn(column);
              }
            }, [(0, _vue.createVNode)("input", {
              "type": "checkbox",
              "value": column,
              "disabled": props.onlyColumn(column),
              "checked": props.columns.includes(column)
            }, null), props.getHeading(column)]);
            return props.theme.framework === 'bulma' ? content : (0, _vue.createVNode)("li", null, [content]);
          });
          return (0, _vue.createVNode)("div", {
            "class": "VueTables__columns-dropdown"
          }, [(0, _vue.createVNode)("button", {
            "type": "button",
            "class": "".concat(props.theme.button, " ").concat(props.theme.dropdown.trigger),
            "on-click": props.toggleColumnsDropdown
          }, [props.display('columns'), (0, _vue.createVNode)("span", {
            "class": "".concat(props.theme.icon, " ").concat(props.theme.small)
          }, [(0, _vue.createVNode)("i", {
            "class": props.theme.dropdown.caret
          }, null)])]), (0, _dropdownWrapper["default"])(h, props.theme.dropdown, cols, props.displayColumnsDropdown)]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
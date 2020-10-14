"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLGenericFilter = _interopRequireDefault(require("./renderless/RLGenericFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGenericFilter',
  components: {
    RLGenericFilter: _RLGenericFilter["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-generic-filter"), {
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables__search-field"
          }, [(0, _vue.createVNode)("label", {
            "for": "VueTables__search_".concat(props.id),
            "class": props.theme.label
          }, [props.display("filter")]), (0, _vue.createVNode)("input", {
            "class": "VueTables__search__input ".concat(props.theme.input, " ").concat(props.theme.small),
            "ref": "filter",
            "type": "text",
            "placeholder": props.display('filterPlaceholder'),
            "on-keyup": props.search(props.opts.debounce),
            "id": "VueTables__search_".concat(props.id),
            "autocomplete": "off"
          }, null)]);
        }
      }
    }, null);
  },
  methods: {
    focus: function focus() {
      this.$refs.filter.focus();
    },
    blur: function blur() {
      this.$refs.filter.blur();
    }
  }
};
exports["default"] = _default2;
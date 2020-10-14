"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLFiltersRow = _interopRequireDefault(require("./renderless/RLFiltersRow"));

var _VtTextFilter = _interopRequireDefault(require("./VtTextFilter"));

var _VtListFilter = _interopRequireDefault(require("./VtListFilter"));

var _VtDateFilter = _interopRequireDefault(require("./VtDateFilter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtFiltersRow',
  components: {
    RLFiltersRow: _RLFiltersRow["default"],
    VtTextFilter: _VtTextFilter["default"],
    VtListFilter: _VtListFilter["default"],
    VtDateFilter: _VtDateFilter["default"]
  },
  render: function render() {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-filters-row"), {
      "scopedSlots": {
        "default": function _default(props) {
          var filters = [];
          if (props.hasChildRow && props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)("th", null, null));
          props.columns.map(function (column) {
            var filter = '';

            if (props.filterable(column)) {
              filter = h(props.filterType(column), {
                props: {
                  column: column
                }
              });
            }

            if (typeof props.slots["filter__".concat(column)] !== 'undefined') {
              filter = filter ? (0, _vue.createVNode)("div", null, [filter, props.slots["filter__".concat(column)]]) : props.slots["filter__".concat(column)];
            }

            filters.push((0, _vue.createVNode)("th", {
              "class": props.columnClass(column)
            }, [!!filter ? (0, _vue.createVNode)("div", {
              "class": ["VueTables__column-filter", 'VueTables__' + column + '-filter-wrapper']
            }, [filter]) : '']));
          });
          if (props.hasChildRow && !props.opts.childRowTogglerFirst && props.opts.showChildRowToggler) filters.push((0, _vue.createVNode)("th", null, null));
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("tr", {
            "class": "VueTables__filters-row"
          }, [filters]);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;
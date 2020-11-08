import RLGenericFilter from "./renderless/RLGenericFilter";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtGenericFilter',
    components: {RLGenericFilter},
    render() {
        return h(RLGenericFilter, {}, {
            default: function (props) {

                return props.override ? h(props.override, {
                        props: omit(props)
                    }) :
                    <div class="VueTables__search-field">
                        <label for={`VueTables__search_${props.id}`} class={props.theme.label}>
                            {props.display("filter")}
                        </label>

                        <input class={`VueTables__search__input ${props.theme.input} ${props.theme.small}`}
                               // ref="filter"
                               type="text"
                               placeholder={props.display('filterPlaceholder')}
                               on-keyup={props.search(props.opts.debounce)}
                               id={`VueTables__search_${props.id}`}
                               autocomplete="off"
                        />
                    </div>
            }
        })
    },
    methods: {
        focus() {
            this.$refs.filter.focus()
        },
        blur() {
            this.$refs.filter.blur()
        }
    }
}

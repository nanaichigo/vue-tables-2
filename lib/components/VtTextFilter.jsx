import RLTextFilter from "./renderless/RLTextFilter";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTextFilter',
    props: ['column'],
    components: {RLTextFilter},
    render() {
        return h(RLTextFilter, {
            column: this.column
        }, {
            default: (props) => {
                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <input
                    on-keyup={props.search(props.debounce)}
                    class={props.theme.input}
                    name={props.getColumnName(this.column)}
                    type="text"
                    placeholder={props.display('filterBy', {column: props.getHeading(this.column)})}
                    autocomplete="off"
                />
            }
        })
    }
}


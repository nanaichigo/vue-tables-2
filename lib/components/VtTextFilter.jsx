import RLTextFilter from "./renderless/RLTextFilter";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtTextFilter',
    props: {
        column: {
            required: true,
            type: String
        }
    },
    components: {RLTextFilter},
    render() {
        return h(RLTextFilter, {
            column: this.column
        }, {
            default: (props) => {
                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <input
                    onKeyup={props.search(props.debounce)}
                    class={props.theme.input}
                    name={props.name}
                    type="text"
                    placeholder={props.display('filterBy', {column: props.getHeading(this.column)})}
                    autocomplete="off"
                />
            }
        })
    }
}


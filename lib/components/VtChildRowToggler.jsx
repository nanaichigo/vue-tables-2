import RLChildRowToggler from "./renderless/RLChildRowToggler";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtChildRowToggler',
    props: ['rowId'],
    components: {RLChildRowToggler},
    render() {
        return h(RLChildRowToggler, {
            rowId: this.rowId
        }, {
            default: function (props) {
                return props.override ? h(props.override, {
                    props: omit(props)
                }) : <td tabindex={props.tabIndex} on-keypress={(e) => {
                    if (e.key === 'Enter') {
                        props.toggle();
                    }
                }} on-click={props.toggle}>
                    <span class={`VueTables__child-row-toggler ` + props.class()}></span>
                </td>
            }
        })
    }
}



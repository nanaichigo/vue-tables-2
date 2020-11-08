import RLTable from "./renderless/RLTable";
import VtTableHead from "./VtTableHead";
import VtTableBody from "./VtTableBody";
import {h} from 'vue'
import omit from "../helpers/omit"

export default {
    name: 'VtTable',
    components: {RLTable, VtTableHead, VtTableBody},
    render() {
        return h(RLTable, {}, {
            default: function (props) {

                var caption = props.caption ? <caption>{props.caption}</caption> : '';

                return props.override ? h(props.override, {props:omit(props)}) :
                    <table
                        class={props.tableAttrs.class}
                        summary={props.tableAttrs.summary}
                    >
                        {caption}
                        {h(VtTableHead)}
                        {props.slots.beforeBody}
                        {h(VtTableBody)}
                        {props.slots.afterBody}
                    </table>
            }
        })
    }
}

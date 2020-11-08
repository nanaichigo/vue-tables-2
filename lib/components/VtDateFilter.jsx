import RLDateFilter from "./renderless/RLDateFilter";
import {h} from "vue"
import omit from "../helpers/omit"

export default {
    name: 'VtDateFilter',
    props: ['column'],
    components: {RLDateFilter},
    render() {
        return h(RLDateFilter, {
            column: this.column
        },{
                default: (props) => {
                    return props.overide ? h(props.override, {
                        props: omit(props)
                    }) : <div class="VueTables__date-filter" id={'VueTables__' + this.column + '-filter'}>
                        <span class="VueTables__filter-placeholder">{props.placeholder}</span>
                    </div>
                }
        })
    }
}


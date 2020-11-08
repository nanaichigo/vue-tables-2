export default {
    name: 'RLChildRow',
    props:['row','index'],
    inject: ['colspan','getChildRowTemplate', 'opts', 'componentsOverride'],
    render(h) {
        return this.$slots.default({
            opts: this.opts(),
            childRow: this.getChildRowTemplate(h, this.row, this.index, this.slots()['child_row']),
            colspan: this.colspan(),
            class: this.opts().rowClassCallback ? this.opts().rowClassCallback(this.row) : '',
            override: this.componentsOverride.childRow
        })
    }
}





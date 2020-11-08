export default {
    name: 'RLTextFilter',
    inject: ['opts','search', 'query', 'theme', 'getHeading', 'display', 'getColumnName', 'componentsOverride'],
    props: ['column'],
    render(h) {
        return this.$slots.default({
            opts: this.opts(),
            column: this.column,
            debounce: this.opts().debounce,
            theme: this.theme,
            search: this.search,
            query: this.query(),
            getHeading: this.getHeading,
            getColumnName: this.getColumnName,
            display: this.display,
            override: this.componentsOverride.textFilter,
        })
    }
}

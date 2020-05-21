import Vue from 'vue'

const components = {
    props: {
        todos: String
    },
    data () {
        return {
            todo: this.todos
        }
    },
    template: `
        <div>
            <input type="text" @input="handlechange" v-model="todo">
            {{todos}}
        </div>
    `,
    methods: {
        handlechange (e) {
            this.$emit('change', this.todo)
        }
    }
}

const app = new Vue({
    el: '#app',
    components: {
        Comp: components
    },
    data () {
        return {
            todo: 'fff'
        }
    },
    mounted () {
        this.getValue()
    },
    methods: {
        getValue () {
            console.log(this.todo)
        }
    },
    template: `
        <div>
            <Comp :todos="todo" @change="todo = arguments[0]"></Comp>
            {{todo}}
        </div>
    `
})

export default app

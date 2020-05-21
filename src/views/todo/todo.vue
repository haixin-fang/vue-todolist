<template>
    <section class="real-app">
        <input type="text"
            autofocus="autofocus"
            placeholder="接下去要做什么？"
            class="add-input"
               @keyup.enter="addTodo"
        >
        <Item v-for="todo in filteredTodos"
              :key="todo.id"
              :todo="todo"
              @del="deleteTodo"
              @change="changeCompleted(bool,id)"
        ></Item>
        <Tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearAll="clearAllCompleted">
        </Tabs>
    </section>
</template>

<script type="text/ecmascript-6">
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    let id = 0
    export default {
        beforeRouteEnter (to, from, next) {
            console.log('component before router enter')
            next(vm => console.log('component before vm', vm))
        },
        beforeRouteUpdate (to, from, next) {
            console.log('component before updade')
            next()
        },
        beforeRouteLeave (to, from, next) {
            console.log('component after leave')
            next()
        },
        mounted () {
            console.log('todo mounted')
        },
        beforeCreated () {
            console.log('todo beforeCreated')
        },
        props: ['route'],
        data () {
            return {
                todos: [],
                filter: 'all'
            }
        },
        computed: {
            filteredTodos () {
                if (this.filter === 'all') {
                    return this.todos
                }
                const completed = this.filter === 'completed'
                return this.todos.filter(todo => todo.completed === completed)
            }
        },
        methods: {
            addTodo (e) {
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                })
                e.target.value = ''
            },
            deleteTodo (id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            toggleFilter (state) {
                this.filter = state
            },
            clearAllCompleted () {
                this.todos = this.todos.filter(todo => {
                    return todo.completed !== true
                })
            },
            changeCompleted (bool, id) {
                this.todos = this.todos.map(todo => {
                    if (todo.id === id) {
                        todo.complete = bool
                    }
                })
            }
        },
        components: {
            Item,
            Tabs
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .real-app {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }

    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: none;
        outline: none;
        color: inherit;
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 36px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }
</style>

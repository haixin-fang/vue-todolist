import Vue from 'vue'

const component = {
    props: {
        active: Boolean,
        onChange: Function
    },
    template: `
        <div>传说中的子组件{{a}}<br>
            <span v-if="active">你会后悔发发发</span><br>
            <button @click="toggle">切换</button>
        </div>
    `,
    methods: {
        toggle () {
            this.$emit('onChange')
        }
    },
    mounted () {
        console.log('component' + this.$parent.a)
    },
    data () {
        return {
            a: '您好'
        }
    }
}
// const Component1 = Vue.extend(component)
//
// new Component1(
//
// ).$mount('#app')
const component1 = {
    extends: component,
    data () {
        return {
            a: '红红火火'
        }
    },
    mounted () {
        console.log('component1' + this.$parent.a)
    }

}

const parent = new Vue({
    name: 'parent'
})

const app = new Vue({
    parent: parent,
    name: 'Root',
    el: '#app',
    components: {
        Comp: component1
    },
    mounted () {
        console.log('app' + this.$parent.$options)
    },
    data () {
        return {
            a: '红红火火dfafd',
            active: true
        }
    },
    template: `
        <div>
            <Comp :active="active"></Comp>
        </div>
    `
})

export default app

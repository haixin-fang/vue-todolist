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
    data () {
        return {
            a: '您好'
        }
    }
}

Vue.component('CompOne', component)

const app = new Vue({
    el: '#app',
    data: {
        a: 'ff',
        active: false
    },
    methods: {
        activeToggle () {
            this.active = !this.active
        }
    },
    template: `
        <div>
            <span>{{a}}</span>
            <comp-one :active="active" :on-change="activeToggle" @onChange="activeToggle"></comp-one>
        </div>
    `
})

export default app

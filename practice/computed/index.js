import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        firstName: 'fang',
        lastName: 'haixin',
        number: 0,
        obj: {
            a: 'fhx'
        },
        arr: ['1', 2, 3],
        bool: true,
        picked: ''
    },
    template: `
        <div>
            <p>firstName: {{firstName}}</p>
            <p>lastName: {{lastName}}</p>
            <p>num: {{name}}</p>
            <p>number: {{number}}</p>
            <p>{{name}}</p>
            <p>{{getName()}}</p>
            <input type="text" v-model="number">
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">
            <input type="text" v-model="obj.a">
            <input type="checkbox" v-model="number">
            <input type="checkbox" value="ff" v-model="arr">
            <input type="checkbox" :value="2" v-model="arr">
            <input type="checkbox" :value="3" v-model="arr">
            <div>
                <input type="radio" value="one" v-model="picked">
                <input type="radio" value="two" v-model="picked">
             </div>
        </div>
    `,
    computed: {
        name: {
            get () {
                console.log(this.picked)
                return `${this.arr}`
            },
            set (name) {
                console.log('name')
                return name
            }
        }
    },
    watch: {
        'obj.a': {
            handler (newVal, oldVal) {
                console.log('number')
            }
        }
    },
    methods: {
        getName () {
            console.log('method')
            return `${this.firstName}+${this.lastName}`
        }
    }
})
export default app

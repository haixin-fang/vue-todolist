import Vue from 'vue'

const Child = {
    template: `
        <div>孙子组件{{grand}}{{a.a}}</div>
    `,
    mounted () {
        console.log(this.grand)
    },
    inject: ['grand', 'a']

}

const component = {
    name: 'son',
    components: {
        Child
    },
    template: `
        <div>
            <div class="header">
                <slot name="header" :a="a" :hello="hello"></slot>
            </div>
            <div class="footer">
                <slot name="footer" :footer="footer"></slot>
            </div>
            <Child></Child>
        </div>
    `,
    data () {
        return {
            a: 'fhx',
            hello: 'nh',
            footer: true
        }
    },
    mounted () {
        console.log('component')
    }
}

const app = new Vue({
    name: 'grandparent',
    el: '#app',
    components: {
        Comp: component
    },
    provide () {
        const data = {}
        Object.defineProperty(data, 'a', {
            get: () => {
                return this.a
            },
            enumerable: true
        })
        return {
            grand: 'fff',
            a: data
        }
    },
    data () {
        return {
            style: {
                color: 'red',
                width: '100px',
                height: '100px',
                border: '1px solid blue'
            },
            a: 'bggfff',
            book: 'book'
        }
    },
    mounted () {
        console.log(this.$refs.comp, this.$refs.footer)
    },
    template: `
        <div>
            <Comp ref="comp">
                <div slot="header" :style="style" slot-scope="props">{{props.a}}{{props.hello}}头部</div>
                <div slot="footer" ref="footer" :book="book" slot-scope="a">底部{{a.footer}}{{style}}</div>
            </Comp>
            <input type="text" v-model="a">
        </div>
    `
})

export default app

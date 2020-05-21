import Vue from 'vue'

const component = {
    props: ['book'],
    render (createElement) {
        return createElement('div', {
            style: this.style
        }, [
            createElement('div', {}, this.book),
            this.$slots.default
        ])
    },
    data () {
        return {
            style: {
                width: '100px',
                height: '100px',
                border: '1px solid blue'
            },
            a: 'fffdg'
        }
    }
}

const app = new Vue({
    el: '#app',
    components: {
        Comp: component
    },
    data () {
        return {
            book: 'hfuabook'
        }
    },
    methods: {
        handle () {
            console.log('nh')
        }
    },
    render (createElement) {
        return createElement('Comp', {
            props: {
                book: this.book
            },
            ref: 'comp',
            nativeOn: {
                click: this.handle
            }
        }, [
            createElement('div', {
                slotScope: 'props',
                attrs: {
                    id: 'ff'
                }
            }, '插槽内容')
        ])
    }
})

export default app

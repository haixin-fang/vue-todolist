import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        aaa: 'main',
        html: '<span>您好</span>',
        arr: [1, 2, 3],
        style: {
            color: 'red'
        },
        bool: true
    },
    methods: {
        getJoin (arr) {
            return arr.join(' ')
        }
    },
    template: `
    <div :id="aaa" :style="style" :class="[bool?'active':'']">
        {{getJoin(arr)}}
    </div>
  `
})

export default app

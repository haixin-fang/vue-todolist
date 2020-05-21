import Vue from 'vue'

const app = new Vue({
    template: '<div>this i 模板 {{a}}</div>',
    data: {
        a: 'fhx'
    }
})

app.a = 'Bg'
app.$mount('#app')

console.log(app.$data)
console.log(app.$el)
console.log(app.$options)

export default app

export default {
    updateCountSync (store, data) {
        setTimeout(() => {
            store.commit('updateCount', {
                num1: data.num
            })
        }, data.time)
    }
}

<template>
    <div id="app">
        <div id="cover"></div>
        <div>{{counter}}</div>
        <div>{{fullName}}</div>
        <Header/>
        <router-link to="/app">主页123</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/login/ext">登录2</router-link>
        <transition name="fade">
            <router-view/>
        </transition>
        <Footer/>
        <notification content="test notification"></notification>
    </div>
</template>

<script type="text/ecmascript-6">
    import Header from './layout/header.vue'
    import Footer from './layout/footer.jsx'
    import {
        mapState,
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        methods: {
            ...mapMutations(['updateCount']),
            ...mapActions(['updateCountSync'])
        },
        components: {
            Header,
            Footer
        },
        computed: {
            ...mapState({
                counter: (state) => state.count
            }),
            count () {
                return this.$store.state.count
            },
            ...mapGetters({
                name: 'fullName'
            }),
            fullName () {
                return this.$store.getters.fullName
            }
        }
    }
</script>

<style scoped lang="stylus">
    #app {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    #cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #999999;
        opacity: 0.9;
        z-index: -1;
    }
</style>

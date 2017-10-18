import vue from 'vue'
import vueDemo1 from './vueDemo1/vueDemo1.vue'

new vue({
    el: "#app",
    render: createElement=>createElement('vueDemo1'),
    components: {vueDemo1}
})
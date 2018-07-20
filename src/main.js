import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSync)
Vue.use(Buefy);
Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import libplugin, {configHelpers} from '@leonardpauli/lp-vue-lib'
import '@leonardpauli/lp-vue-lib/dist/@leonardpauli/lp-vue-lib.css'

Vue.config.productionTip = false

const {keyfix} = configHelpers
Vue.use(libplugin, {config: {
	ui: keyfix({
		style: keyfix({
		}),
		button: keyfix({
			'kind.default.style.main.backgroundColor': '#00AAAA',
		}),
	}),
} })

new Vue({
	router,
	render: h=> h(App),
}).$mount('#app')

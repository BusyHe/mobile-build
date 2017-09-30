import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import '@/common/stylus/index.styl'
import 'common/js/flexible/flexible_css'
import 'common/js/flexible/flexible'

import Message from 'base/message'
import 'base/message/message.css'

Vue.prototype.$message = Message;

Vue.config.productionTip = false;
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

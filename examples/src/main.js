import { createApp } from 'vue';
import App from './App.vue';
import './styles/reset.css';

import PfComponents from '../../dist/@pf-scaffold/aaa.esm';

createApp(App).use(PfComponents).mount('#app');

import { createStore } from 'vuex';
import postModule from './postModule';
import authModule from './'

export default createStore({
  modules: {
    post: postModule,
  },
});

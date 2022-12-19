import { createStore } from 'vuex';
import postModule from './postModule';
import authModule fr

export default createStore({
  modules: {
    post: postModule,
  },
});

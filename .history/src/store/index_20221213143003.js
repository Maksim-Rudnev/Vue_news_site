import { createStore } from 'vuex';
import postModule from './postModule';
import a

export default createStore({
  modules: {
    post: postModule,
  },
});

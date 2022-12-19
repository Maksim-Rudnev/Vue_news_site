import { createStore } from 'vuex';
import postModule from './postModule';
import userModule from './userModule';

export default createStore({
  modules: {
    post: postModule,
    auth: authModule,
  },
});

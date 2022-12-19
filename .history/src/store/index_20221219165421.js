import { createStore } from 'vuex';
import postModule from './postModule';
import userModule from './userModule';
import authModule from './authModule';

export default createStore({
  modules: {
    post: postModule,
    user: userModule,
    auth: authModule,
    dialog: dialogModule,
  },
});

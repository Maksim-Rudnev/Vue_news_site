import { createStore } from 'vuex';
import postModule from './postModule';
import userModule from './userModule';
import authModule from './authModule';
import dialogModule from './dialogModule';

export default createStore({
  modules: {
    post: postModule,
    user: userModule,
    auth: authModule,
    dialog: dialogModule,
  },
});

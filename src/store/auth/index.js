import firebase from 'firebase/app';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setItem(state, { name, value }) {
      state[name] = value;
    },
  },
  actions: {
    async userLogin({ commit }, { email, password }) {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      commit('setItem', {
        name: 'user',
        value: firebase.auth().currentUser(),
      });
      return response;
    },
    async userRegistration({ dispatch }, { email, password }) {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uid = await dispatch('getUid');
      await firebase.database().ref(`/users/${uid}/info`).set({
        name: 'Unknown user',
        age: null,
      });
      return response;
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
  },
};

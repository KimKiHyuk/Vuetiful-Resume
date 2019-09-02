// eslint-disable-next-line consistent-return
export default function ({ store, redirect }) {
  if (!store.getters['authStore/loggedIn']) {
    return redirect('/Login');
  }
}

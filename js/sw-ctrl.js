//Utlized https://www.youtube.com/watch?v=ksXwaWHCW6k&feature=youtu.be to program service worker
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}

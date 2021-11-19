// Any other custom service worker logic can go here.
/* eslint-disable no-restricted-globals */
/* eslint-disable-next-line no-console */
console.log('Service Worker Works');
// Service Worker Support
self.addEventListener('push', (e) => {
  const data = e.data.json();
  /* eslint-disable-next-line no-console */
  console.log(data);
  /* eslint-disable-next-line no-console */
  console.log('Notification Received');
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/1024px-Archlinux-icon-crystal-64.svg.png',
  });
});

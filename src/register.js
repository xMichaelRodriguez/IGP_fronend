const PUBLIC_VAPID_KEY =
  'BLoLfsjJyBN5ZDRwBWg2KwldSwn589g0gP_-kb-XFknbQb7adCXWijL6quu9oJS5gmgSUotX8Yc5AIjqg5Na0fE';

const subscription = async () => {
  // Service Worker
  /* eslint-disable-next-line no-console */
  console.log('Registering a Service worker');
  const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/*',
  });
  /* eslint-disable-next-line no-console */
  console.log('New Service Worker');

  // Listen Push Notifications
  /* eslint-disable-next-line no-console */
  console.log('Listening Push Notifications');
  const resultSubscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
  });
  /* eslint-disable-next-line no-console */
  console.log(resultSubscription);

  // Send Notification
  await fetch(`${process.env.REACT_APP_API_URL}/auth/subscription`, {
    method: 'POST',
    body: JSON.stringify(resultSubscription),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  /* eslint-disable-next-line no-console */
  console.log('Subscribed!');
};

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default subscription;

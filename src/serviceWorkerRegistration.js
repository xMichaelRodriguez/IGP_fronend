// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA
const PUBLIC_VAPID_KEY =
  'BLoLfsjJyBN5ZDRwBWg2KwldSwn589g0gP_-kb-XFknbQb7adCXWijL6quu9oJS5gmgSUotX8Yc5AIjqg5Na0fE';
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ),
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          /* eslint-disable-next-line no-console */
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://cra.link/PWA',
          );
        });
      } else {
        // Is not localhost. Just register service worker

        registerValidSW(swUrl, config);
      }
    });
  }
}
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

function registerValidSW(swUrl, config) {
  // eslint-disable-next-line default-case
  switch (window.Notification.permission) {
    case 'default':
      window.Notification.requestPermission((permission) => {
        /* eslint-disable-next-line no-console */
        console.log('Permiso: ', permission);
      });
      break;
    case 'granted':
      /* eslint-disable-next-line no-console */
      console.log('Puedo enviarte notificaciones...');
      break;
    case 'denied':
      /* eslint-disable-next-line no-console */
      console.log('No me permitistes enviarte las notificaciones.');
      break;
  }
  navigator.serviceWorker
    .register(swUrl, { scope: '/' })
    .then((registration) => {
      /* eslint-disable-next-line no-console */
      console.log('New Service Worker');
      const result = { ...registration };

      // Listen Push Notifications
      /* eslint-disable-next-line no-console */
      console.log('Listening Push Notifications');
      // eslint-disable-next-line no-console
      console.log(result);
      registration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY),
        })
        .then((subscribed) => {
          /* eslint-disable-next-line no-console */
          console.log('Push Notification subscribing', subscribed);
          // Send Notification
          fetch(`${process.env.REACT_APP_API_URL}/auth/subscription`, {
            method: 'POST',
            body: JSON.stringify(subscribed),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((resp) => {
            /* eslint-disable-next-line no-console */
            console.log(resp);
            /* eslint-disable-next-line no-console */
            console.log('Subscribed!');
          });
        })
        // eslint-disable-next-line no-console
        .catch((e) => console.log);

      result.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }

        /* eslint-disable-next-line no-console */
        console.log('service worked installing');
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            /* eslint-disable-next-line no-console */
            console.log('service worked installed');
            /* eslint-disable-next-line */
            window.addEventListener('beforeinstallprompt', function (e) {
              // log the platforms provided as options in an install prompt
              /* eslint-disable-next-line no-console */
              console.log(e.platforms); // e.g., ["web", "android", "windows"]
            });
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              /* eslint-disable-next-line no-console */
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://cra.link/PWA.',
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              /* eslint-disable-next-line no-console */
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
                /* eslint-disable-next-line no-console */
                console.log('callback execute');
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      /* eslint-disable-next-line no-console */
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      /* eslint-disable-next-line no-console */
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error(error.message);
      });
  }
}

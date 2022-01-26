const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSync = (endPoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endPoint}`; // localhost:4000/api/...

  if (method === 'GET') {
    return fetch(url);
  }
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const fetchAsync = (endPoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endPoint}`; // localhost:4000/api/...
  const token = localStorage.getItem('token') || '';

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'x-token': token.toString(),
      },
    });
  }

  return fetch(url, {
    method,
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-token': token.toString(),
    },
    body: JSON.stringify(data),
  });
};

export const fetchAsyncHistory = (endPoint, data, method = 'POST') => {
  const url = `${baseUrl}/${endPoint}`; // localhost:4000/api/...
  const token = localStorage.getItem('token') || '';
  const content = {
    title: data.title,
    body: data.body,
    date: new Date(),
    imageUrl: data.imageUrl,
    publicImg_id: data.publicImg_id,
  };
  if (method === 'POST') {
    if (typeof content.imageUrl === 'object') {
      /* eslint-disable-next-line no-console */
      console.log('is object');

      const formDataPost = new FormData();
      formDataPost.append('title', content.title);
      formDataPost.append('body', content.body);
      formDataPost.append('date', content.date);
      formDataPost.append('publicImg_id', content.publicImg_id);
      formDataPost.append('image', content.imageUrl);

      return fetch(url, {
        method,
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          accept: 'application/json',
          'x-token': token.toString(),
        },
        body: formDataPost,
      });
    }
    /* eslint-disable-next-line no-console */
    console.log('is string');

    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-token': token.toString(),
      },
      body: JSON.stringify(content),
    });
  }
  if (method === 'PUT') {
    /* eslint-disable-next-line no-console */
    console.log('is PUT');
    if (typeof content.imageUrl === 'object') {
      /* eslint-disable-next-line no-console */
      console.log('is object PUT');
      const formDataPut = new FormData();
      formDataPut.append('title', content.title);
      formDataPut.append('body', content.body);
      formDataPut.append('date', content.date);

      formDataPut.append('image', content.imageUrl);
      return fetch(url, {
        method,
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          accept: 'application/json',
          'x-token': token.toString(),
        },
        body: formDataPut,
      });
    }

    if (content.publicImg_id !== '' && typeof content.imageUrl === 'string') {
      /* eslint-disable-next-line no-console */
      console.log('is https');
      return fetch(url, {
        method,
        mode: 'cors',

        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-token': token.toString(),
        },
        body: JSON.stringify(content),
      });
    }
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-token': token.toString(),
    },
  });
};

export const fetchAsyncToCommics = (endPoint, data, method = 'POST') => {
  const url = `${baseUrl}/${endPoint}`; // localhost:4000/api/...
  const token = localStorage.getItem('token') || '';

  if (method === 'POST') {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('coverPage', data.coverPage);
    formData.append('gallery', data.image1);
    formData.append('gallery', data.image2);
    formData.append('gallery', data.image3);
    formData.append('gallery', data.image4);
    formData.append('gallery', data.image5);

    return fetch(url, {
      method,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'x-token': token.toString(),
      },
      body: formData,
    });
  }
  return fetch(url, {
    method,
    headers: {
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      'x-token': token.toString(),
    },
    body: JSON.stringify(data),
  });
};

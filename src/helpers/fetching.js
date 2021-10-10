const baseUrl = process.env.REACT_APP_API_URL

export const fetchSync = (
  endPoint,
  data,
  method = 'GET'
) => {
  const url = `${baseUrl}/${endPoint}` //localhost:4000/api/...

  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}

export const fetchAsync = (
  endPoint,
  data,
  method = 'GET'
) => {
  const url = `${baseUrl}/${endPoint}` //localhost:4000/api/...
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'x-token': token.toString(),
      },
    })
  } else {
    if (data.image) {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('body', data.body)
      formData.append('date', data.date)
      formData.append('image', data.image)
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          'x-token': token,
        },
        body: formData,
      })
    }
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',

        'x-token': token,
      },
      body: JSON.stringify(data),
    })
  }
}
const fetching = {
  fetchSync,
}
export default fetching

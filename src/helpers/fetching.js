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
    if (data.imageUrl !== '') {
      const content = {
        title: data.title,
        body: data.body,
        date: data.date,
        imageUrl: data.imageUrl ? data.imageUrl : '',
      }
      const formData = new FormData()
      formData.append('title', content.title)
      formData.append('body', content.body)
      formData.append('date', content.date)
      formData.append('image', content.imageUrl)

      if (method === 'PUT') {
        if (data.imageUrl !== '') {
          if (typeof data.imageUrl === 'object') {
            const formDataPut = new FormData()
            formDataPut.append('title', content.title)
            formDataPut.append('body', content.body)
            formDataPut.append('date', content.date)
            formDataPut.append(
              'publicImg_id',
              data.publicImg_id
            )
            formDataPut.append('image', content.imageUrl)

            return fetch(url, {
              method,
              headers: {
                accept: 'application/json',
                'x-token': token.toString(),
              },
              body: formDataPut,
            })
          } else if (
            typeof data.imageUrl !== 'object' &&
            data.imageUrl.includes('https')
          ) {
            return fetch(url, {
              method,
              headers: {
                'Content-Type': 'application/json',
                'x-token': token.toString(),
              },
              body: JSON.stringify(content),
            })
          }
        } else {
          return fetch(url, {
            method,
            headers: {
              accept: 'application/json',
              'x-token': token.toString(),
            },
            body: formData,
          })
        }
      }
    }
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-token': token.toString(),
      },
      body: JSON.stringify(data),
    })
  }
}
const fetching = {
  fetchSync,
}
export default fetching

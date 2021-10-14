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
    const content = {
      title: data.title,
      body: data.body,
      date: new Date(),
      imageUrl: data.imageUrl,
    }

    if (
      data.imageUrl !== '' &&
      data.publicImage_id === ''
    ) {
      if (method === 'PUT') {
        if (typeof content.imageUrl === 'object') {
          const formDataPut = new FormData()
          formDataPut.append('title', content.title)
          formDataPut.append('body', content.body)
          formDataPut.append('date', content.date)
          formDataPut.append(
            'publicImg_id',
            data.publicImg_id
          )
          formDataPut.append('image', content.imageUrl)
          console.log(formDataPut.get('image'))
          return fetch(url, {
            method,
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              accept: 'application/json',
              'x-token': token.toString(),
            },
            body: formDataPut,
          })
        }

        if (
          content.publicImg_id !== '' &&
          content.imageUrl.includes('https')
        ) {
          return fetch(url, {
            method,
            mode: 'cors',

            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              'x-token': token.toString(),
            },
            body: JSON.stringify(content),
          })
        }
      }
    }

    if (
      method === 'POST' &&
      typeof data.imageUrl === 'object'
    ) {
      const formDataPost = new FormData()
      formDataPost.append('title', content.title)
      formDataPost.append('body', content.body)
      formDataPost.append('date', content.date)
      formDataPost.append('publicImg_id', data.publicImg_id)
      formDataPost.append('image', content.imageUrl)

      return fetch(url, {
        method,
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          accept: 'application/json',
          'x-token': token.toString(),
        },
        body: formDataPost,
      })
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

export const fetchAsyncToCommics = (
  endPoint,
  data,
  method = 'POST'
) => {
  const url = `${baseUrl}/${endPoint}` //localhost:4000/api/...
  const token = localStorage.getItem('token') || ''
  if (method === 'POST') {
    let gallery = new Array()

    gallery.push(data.image1)
    gallery.push(data.image2)
    gallery.push(data.image3)
    gallery.push(data.image4)
    gallery.push(data.image5)
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('coverPage', data.coverPage)
    formData.append('gallery')

    console.log({ form: formData.get('gallery') })

    // return fetch(url, {
    //   method,
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     accept: 'application/json',
    //     'x-token': token.toString(),
    //   },
    //   body: formData,
    // })
  }
}

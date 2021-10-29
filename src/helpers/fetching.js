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
      publicImg_id: data.publicImg_id
    }
    console.log('entro a else si no es get', data?.publicImg_id)
    if (
      content.imageUrl &&
      content.publicImg_id
    ) {
      console.log("entro a validacion de imagen url y public img aid")
      if (method === 'PUT') {
        console.log('entro  put', typeof content.imageUrl)
        if (typeof content.imageUrl === 'object') {
          console.log('entro a typeof object')
          const formDataPut = new FormData()
          formDataPut.append('title', content.title)
          formDataPut.append('body', content.body)
          formDataPut.append('date', content.date)

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
          console.log('entro https')
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
    } else if (method === 'PUT') {
      return fetch(url, {
        method, mode: 'cors', headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-token': token.toString()
        },
        body: JSON.stringify(data)
      })

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


    if (method === 'DELETE') {
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-token': token.toString(),
        },
      })
    }
  }
}

export const fetchAsyncToCommics = (
  endPoint,
  data,
  method = 'POST'
) => {
  const url = `${baseUrl}/${endPoint}` //localhost:4000/api/...
  const token = localStorage.getItem('token') || ''

  console.log(url)
  if (method === 'POST') {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('coverPage', data.coverPage)
    formData.append('gallery', data.image1)
    formData.append('gallery', data.image2)
    formData.append('gallery', data.image3)
    formData.append('gallery', data.image4)
    formData.append('gallery', data.image5)

    return fetch(url, {
      method,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        accept: 'application/json',
        'x-token': token.toString(),
      },
      body: formData,
    })
  }
}

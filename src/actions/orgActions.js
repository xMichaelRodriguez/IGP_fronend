import { fetchAsync } from '../helpers/fetching'
import { types } from '../types/types'

export const orgStartLoading = () => {
  return async (dispath) => {
    try {
      const resp = await fetchAsync('organizations ')
      const content = await resp.json()
      if (content.ok) {
        delete content.ok
        dispath(orgLoaded(content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const orgLoaded = (org) => ({
  type: types.orgLoaded,
  payload: org,
})

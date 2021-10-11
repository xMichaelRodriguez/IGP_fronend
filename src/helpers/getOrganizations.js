const baseUrl = process.env.REACT_APP_API_URL
export const getOrganizations = async (
  categories = null
) => {
  const url =
    categories !== null
      ? baseUrl + '/organizations/' + categories
      : '/organizations'
  const resp = await fetch(url)
  const data = await resp.json()
  if (!data.ok) {
    return null
  }

  delete data.ok

  const organizations = data.organizations.map(
    (organization) => {
      return {
        ...organization,
      }
    }
  )

  return organizations
}

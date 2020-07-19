type Method = 'get'

type RequestAttr = {
  method: Method
  path: string
  params?: Record<string, string>
}

type Request = <T>({ method, path, params }: RequestAttr) => Promise<T>

/**
 * make request
 */
export const request: Request = async ({ method, path, params }) => {
  const options: RequestInit = { method: method.toUpperCase() }
  const url = new URL(path, process.env.API_URL)

  if (params) {
    url.search = new URLSearchParams(params).toString()
  }

  const response = await fetch(url.href, options)

  return response.json()
}

type Method = 'get'

type RequestAttr = {
  method: Method
  path: string
  params?: Record<string, string>
}

type Request = <T>({ method, path, params }: RequestAttr) => Promise<Answer<T>>

export type Answer<T = unknown> = {
  ok: boolean
  status: number
  body: T
}

/**
 * make request
 */
export const request: Request = async ({ method, path, params }) => {
  const options: RequestInit = { method: method.toUpperCase() }
  const url = new URL(`${process.env.API_URL}/${path}`)

  if (params) {
    url.search = new URLSearchParams(params).toString()
  }

  const response = await fetch(url.href, options)

  return response.json()
}

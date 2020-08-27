export type Rate = {
  code: string
  alphaCode: string
  numericCode: string
  name: string
  rate: number
  date: Date
  inverseRate: number
}

export type Rates = {
  [key: string]: Rate
}

export type Stop = {
  id: string
  label: string
  checked: boolean
}

export type Currency = {
  id: string
  label: string
  value: string
  checked: boolean
  rate: number
}

const blurEmail = (value: string) => {
  const [name, domain] = value.split('@')
  const limit = name.length > 2 ? 2 : 1
  const firstChars = name.substring(0, limit)

  return `${firstChars}${name.substring(limit).replace(/[\s\S]/g, '*')}@${domain}`
}

const price = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)

  return formattedAmount
}

const digits = (value: string) => {
  return value.replace(/[^0-9]/g, '')
}

const date = (date: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/

  if (!regex.test(date)) return date

  const [year, month, day] = date.split('-').map(Number)

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(year, month - 1, day))

  return formattedDate
}

const dateToIso = (date: string) => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/

  if (!regex.test(date)) return date

  const dateSegments = date.split('/')

  return dateSegments.reverse().join('-')
}

const cnpj = (value: string) => {
  return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

const phone = (value: string) => {
  return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const format = {
  email: blurEmail,
  price,
  digits,
  date,
  dateToIso,
  cnpj,
  phone,
}

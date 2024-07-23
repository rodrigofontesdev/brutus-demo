const blurEmail = (value: string) => {
  const [name, domain] = value.split('@')
  const limit = name.length > 2 ? 2 : 1
  const firstChars = name.substring(0, limit)

  return `${firstChars}${name.substring(limit).replace(/[\s\S]/g, '*')}@${domain}`
}

const price = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)

  return formattedAmount
}

export const format = {
  email: blurEmail,
  price: price
}

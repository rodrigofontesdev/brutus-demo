const blurEmail = (value: string) => {
  const [name, domain] = value.split('@')
  const limit = name.length > 2 ? 2 : 1
  const firstChars = name.substring(0, limit)

  return `${firstChars}${name.substring(limit).replace(/[\s\S]/g, '*')}@${domain}`
}

export const format = {
  email: blurEmail,
}

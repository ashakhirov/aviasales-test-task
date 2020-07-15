export const createNounDeclension = (
  amount: number,
  textForms: string[],
  zeroForm?: string,
): string => {
  const rem = amount % 100
  const key = rem > 20 ? rem % 10 : rem

  switch (true) {
    case key === 1:
      return `${amount} ${textForms[0]}`
    case key >= 2 && key <= 4:
      return `${amount} ${textForms[1]}`
    case key >= 5 && key <= 20:
      return `${amount} ${textForms[2]}`
    case key === 0 && amount !== 0:
      return `${amount} ${textForms[2]}`
    default:
      return zeroForm ? zeroForm : `${amount} ${textForms[2]}`
  }
}

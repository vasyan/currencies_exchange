export default function getFieldStyles(value, fieldWidth = 100) {
  if (value === null) {
    return {}
  }

  const { length } = value

  return {
    fontSize: length > 6 ? (fieldWidth / length) * 1.5 : 24
  }
}

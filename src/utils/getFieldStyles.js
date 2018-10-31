export default function getFieldStyles({ length }, fieldWidth = 100) {
  return {
    fontSize: length > 6 ? (fieldWidth / length) * 1.5 : 24
  }
}

export default function precisionDecimal(value, precision) {
  return Number(
    (typeof value == 'string' ? value : String(value)).replace(
      new RegExp(`(\\d+\\.\\d{${precision},${precision}})(\\d+)$`),
      '$1'
    )
  )
}

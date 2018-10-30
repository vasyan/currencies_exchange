// (7.4242, 2) => 7.42
// (42, 5) => 42

export default function precisionDecimal(value, precision) {
  return Number(
    (typeof value == 'string' ? value : String(value)).replace(
      new RegExp(`(\\d+\\.\\d{${precision},${precision}})(\\d+)$`),
      '$1'
    )
  )
}

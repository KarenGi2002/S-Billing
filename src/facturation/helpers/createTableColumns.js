// col = { value: string, cb: renderFunction }
// columnNames: Array<col>

const toDromedaryCase = (sentence) => {
  const formatted = sentence.trim().toLowerCase().replace(/\s+/g, " ");
  let capitalized = ''
  formatted.split(' ').forEach((word, index) => {
    if (index !== 0) capitalized += word.charAt(0).toUpperCase() + word.slice(1)
    else capitalized += word
  })
  return capitalized
}

export const createTableColumns = (columnNames = []) => {
  const columns = []
  columnNames.forEach((col) => {
    let column = {
      title: col.val,
      key: toDromedaryCase(col.val)
    }
    if (col?.render === undefined) column.dataIndex = toDromedaryCase(col.val)
    else {
      const { render } = col
      column = {...column, render}
    }
    columns.push(column)
  })
  return columns
}

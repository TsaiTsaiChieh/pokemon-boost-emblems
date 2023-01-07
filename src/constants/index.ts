export const Level: {[lv in LevelType]: GradeType} = {
  1: 'C',
  2: 'B',
  3: 'A',
}
export const Metric: {[key in number]: string[]} = {
  0: ['30', '40', '50'],
  1: ['1.2', '1.6', '2'],
  2: ['3', '4', '5'],
  3: ['3', '4', '5'],
  4: ['1.8', '2.4', '3'],
  5: ['21', '28', '35'],
  6: ['0.3%', '0.5%', '0.6%'],
  7: ['0.3%', '0.4%', '0.5%'],
}
export const Color: {[key in number]: string} = {
  0: 'Green',
  1: 'Yellow',
  2: 'Red',
  3: 'Blue',
  4: 'White',
  5: 'Black',
  6: 'Brown',
  7: 'Purple',
  8: 'Pink',
  9: 'Navy',
}

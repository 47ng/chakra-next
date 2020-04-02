// https://css-tricks.com/snippets/css/system-font-stack/
// https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f
// https://www.client9.com/css-system-font-stack-monospace-v2/

export const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
  'sans-serif'
].join(',')

export const systemMonoFontStack = [
  '"SFMono-Regular"',
  'Menlo',
  'Consolas',
  '"Liberation Mono"',
  'Courier',
  'monospace'
].join(',')

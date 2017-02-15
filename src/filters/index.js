export function domain (url) {
  return url.match(/\/\/(.*?)\//)[1]
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function pluralize (num, label) {
    if (num === 1) {
        return num + label
    }
    return num + label + 's'
}

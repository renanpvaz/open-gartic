const omit = (keys, obj) => (
  Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
)

export default omit

const userTable = new Map()

userTable.set('user', { password: '111111' })

function getUser(key) {
    return userTable.get(key)
}
function setUser({ key, value }) {
    userTable.set(key, value)
}
function hasUser(key) {
    return userTable.has(key) ? getUser(key) : false
}

module.exports = {
    getUser,
    setUser,
    hasUser
}
const adminTable = new Map()

adminTable.set('admin', { password: '123456' })

function getAdmin(key) {
    return adminTable.get(key)
}
function setAdmin({ key, value }) {
    adminTable.set(key, value)
}
function hasAdmin(key) {
    return adminTable.has(key) ? getAdmin(key) : false
}

module.exports = {
    getAdmin,
    setAdmin,
    hasAdmin
}
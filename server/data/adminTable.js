const adminTable = new Map()

adminTable.set('admin', { password: '000000', createTime: '1713702652532', auth: 'all' })

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
const onLine = new Map()

function getOnLine(id) {
    return onLine.get(id)
}

function getOnLineAll(){
    return [...onLine]
}

function setOnLine(id,data) {
    onLine.set(id,data)
}

function hasOnLine(id){
    return onLine.has(id) ? getOnLine(id) : false
}

function delOnLine(id){
    onLine.delete(id)
}

module.exports = {
    getOnLine,
    setOnLine,
    hasOnLine,
    getOnLineAll,
    delOnLine
}
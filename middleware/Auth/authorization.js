const adminAuthorize = (req, res, next) => {
    const { user } = req
    if (["admin"].findIndex(e => e === user.type) > -1) {
        next()
    }
    else{
        res.send("You cannot use this permission")
    }
}

const userAuthorize = (req, res, next) => {
    const { user } = req
    if (["user"].findIndex(e => e === user.type) > -1) {
        next()
    }
    else{
        res.send("You cannot use this permission")
    }
}

module.exports = {
    adminAuthorize,
    userAuthorize,
}
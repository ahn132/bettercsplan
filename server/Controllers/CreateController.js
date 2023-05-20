const User = require("../Models/UserModel")
const Class = require("../Models/ClassModel")

//sets a user's tracks
module.exports.setTracks = async(req, res) => {
    const username = req.username
    const {tracks} = req.body

    try {
        await User.updateOne({username: username}, {tracks: tracks})
        return res.status(200).json()
    } catch {
        return res.status(400).json()
    }
}

//gives a list of all classes back to the client
module.exports.getClasses = async(req, res) => {
    try {
        let classes = await Class.find({}, "name")
        classes = classes.map(classObj => classObj.name)
        return res.status(200).json({classes: classes})
    } catch {
        return res.status(400).json()
    }
}

//sets a user's already taken classes
module.exports.setTaken = async(req, res) => {
    const username = req.username
    const {classes} = req.body
    try {
        await User.updateOne({username: username}, {taken: classes})
        return res.status(200).json()
    } catch {
        return res.status(400).json()
    }
}

module.exports.setOptions = async(req, res) => {
    const username = req.username
    const {years, summer} = req.body
    try {
        await User.updateOne({username: username}, {years: years, openToSummer: summer})
        return res.status(200).json()
    } catch {
        return res.status(400).json()
    }
}

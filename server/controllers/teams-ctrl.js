const teamModel = require('../models/team-model');

const getTeams = async (req, res) => {
    await teamModel.find({})
        .then((teams, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (teams.length == 0) {
                return res.json({ success: false, massage: "no teams" })
            }
            res.status(200).json({ success: true, teams })
        })
}
const getTeamById = async (req, res) => {
    await teamModel.findById(req.params.id)
        .then(team => {
            if (!team) {
                return res.json({ success: false, massage: "team is not available" })
            }
            return res.status(200).json({ success: true, team })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}
const createTeam = async (req, res) => {
    //TODO validation
    await teamModel.insertMany(req.body.team)
        .then(() => res.status(300).json({ success: true, massage: "team added succesfuly" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}
const updateTeam = async (req, res) => {
    await teamModel.findByIdAndUpdate(req.params.id, req.body.team)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteTeam = async (req, res) => {
    await teamModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getTeams,
    createTeam,
    getTeamById,
    deleteTeam,
    updateTeam
}
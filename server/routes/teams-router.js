const router = require('express').Router()
const {
    getTeams,
    createTeam,
    getTeamById,
    deleteTeam,
    updateTeam
} = require('../controllers/teams-ctrl')

router.get('/', getTeams)
router.get('/:id', getTeamById)
router.post('/saveData', createTeam)
router.delete('/delete/:id', deleteTeam)
router.put('/update/:id', updateTeam)

module.exports = router;

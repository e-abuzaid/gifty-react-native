import express from 'express'
import {getPeople, getPerson, deletePerson, getPersonBySearch, createPerson, updatePerson} from '../controllers/person.js'


const router = express.Router()

router.get('/', getPeople)
router.post('/', createPerson)
router.delete('/:id', deletePerson)
router.get('/:id', getPerson)
router.put('/:id', updatePerson)
router.get('/search', getPersonBySearch)

export default router
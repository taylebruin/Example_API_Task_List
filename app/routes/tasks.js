const express = require(`express`)
const router = express.Router()

const Task = require(`../models/Task`)

/**
 * GET: Returns one task with the task's id specified in the path
 */
router.get(`/:id`, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})
// Post adds new task to database!
router.post('/', async (req, res) => {
	try{
		if(!req.body.Text || !req.body.Date){
			console.error(error)
			res.status(500).send(`Something went wrong with adding a task`)
		}
		//console.log(req.body)
		const task = new Task({Text: req.body.Text, Date: req.body.Date, UserId: req.user.Id, Done: false})
		let result = await task.save();
		res.status(201).send(result)
	}
	catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong with adding a task`)
	}

}
)
//gets all tasks from database
router.get('/', async (req, res) =>{
	try {
		let tasklist = await Task.find({UserId: req.user.Id})
			res.status(200).send(tasklist)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong with getting the tasks.`)
	}
})
//updates a task in the database
router.put('/:id', async (req, res) => {
	try {
		task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else{
		task = await Task.updateOne({_id: req.params.id}, {Done: req.body.Done});
		task = await Task.findById(req.params.id)
		res.status(201).send(task);
		}

	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})
//deletes a task from the database
router.delete('/:id', async (req, res) => {
	try {
		const task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else 
		{
			task = await Task.deleteOne({_id: req.params.id});
		res.status(201).send();
	}
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
}
)


//exports routes to be used
module.exports = router

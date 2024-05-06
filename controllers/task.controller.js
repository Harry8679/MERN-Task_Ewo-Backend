const create = (req, res) => {
    console.log(req.body);

    res.send('Create a new task');
}

module.exports = { create };
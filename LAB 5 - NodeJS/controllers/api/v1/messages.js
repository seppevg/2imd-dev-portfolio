const getAll = (req, res) => {
    res.send('Get message');
};

const create = (req, res) => {
    res.send('Post message');
};

const update = (req, res) => {
    res.send('Put message ' + req.params.id);
};

const remove = (req, res) => {
    res.send('Delete message ' + req.params.id);
};

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
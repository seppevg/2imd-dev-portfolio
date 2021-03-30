const getAll = (req, res) => {
    res.json({
        status: "success",
        data: { message: `GETTING messages` }
    });
};

const getId = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: { message: `Get the message with ID ${id}` }
    });
};

const create = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: { message: `POSTING a message with ID ${id}` }
    });
};

const update = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: { message: `UPDATING a message with ID ${id}` }
    });
};

const remove = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: { message: `DELETING a message with ID ${id}` }
    });
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
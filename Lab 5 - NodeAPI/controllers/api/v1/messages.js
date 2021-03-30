const getAll = (req, res) => {
    console.log(req.query.user); //Naam van gebruiker
    if (req.query.user) {
        let username = req.query.user;
        res.json({
            "status": "success",
            "data": { "message": `GETTING messages for username ${username}` }
        });
    }
    else {
        res.json({
            "status": "success",
            "data": { "message": "GETTING messages" }
        });
    }
};

const getId = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "data": { "message": `Get the message with ID ${id}` }
    });
};

const create = (req, res) => {
    let username = "Pikachu";
    res.json({
        "status": "success",
        "data": { "message": `POSTING a new message for user ${username}` }
    });
};

const update = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "data": { "message": `UPDATING a message with ID ${id}` }
    });
};

const remove = (req, res) => {
    let id = req.params.id;
    res.json({
        "status": "success",
        "data": { "message": `DELETING a message with ID ${id}` }
    });
};

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
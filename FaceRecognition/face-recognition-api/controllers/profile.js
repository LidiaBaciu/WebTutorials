const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: "582eafc8d8e14130b0a21b1dc6dd6467",
});


const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users')
        .where('id', id)
        .then(user => {
            if(user.length){
                res.json(user[0])
            } else {
                res.status(400).json('no user with that id')
            }
        })
        .catch(err => res.status(400).json('error retrieving user'))
}

const handleApiCall = (req, res) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with the API'))
}
const handleProfilePut = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries)
        })
        .catch(err => res.status(400).json('unable to update entries'))
}

module.exports = {
    handleProfileGet: handleProfileGet,
    handleProfilePut: handleProfilePut,
    handleApiCall,
}
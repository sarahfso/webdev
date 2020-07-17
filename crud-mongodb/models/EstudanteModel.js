var mongoose = require('mongoose')

var EstudanteSchema = mongoose.Schema(
    {
        nome: { type: String, required: true, max: 150 },
        curso: { type: String, required: true, max: 100 },
        ira: { type: Number, required: true }
    }
)

var EstudanteModel = mongoose.model('estudantes', EstudanteSchema)

module.exports = EstudanteModel
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// delete mongoose.connection.models['tag'];
var tagSchema = new Schema({
    name: {
        type: String,
        required: 'Nama Tidak Boleh Kosong!',
        trim: true
    },
}, { timestamps: true });
module.exports = mongoose.models.Tag || mongoose.model('tag', tagSchema);   
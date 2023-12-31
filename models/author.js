const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

AuthorSchema.virtual("name").get(() => {
    let fullName = "";
    if(this.first_name && this.family_name){
        fullName = `${this.family_name}. ${this.first_name}`;
    }
    return fullName;
});

AuthorSchema.virtual("url").get(() => {
    return `/catalog/author/${this.id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
const fs = require('fs');
const StudentDTO = require('./../dto/StudentDTO');
const constants = require('./../constants/Constants');
const csvFields = require('./../config/csv-fields');
const csvtojson = require('csvtojson/v2');
const os = require('os');

module.exports = {

    FileWriter: function() {

        this.errors = [];
        this.WriteStudents = (filename, students) => {
            fs.writeFile(filename, JSON.stringify(students), 
            err => { if (err) console.error(err)});
        }
    },

    StudentBuilder: function() {

        var CsvFields = csvFields.Fields;
        this.Build = async csvFile => {
            return await csvtojson({
                noheader:false,
                headers:CsvFields
            })
            .fromString(csvFile);
        }
    }
};
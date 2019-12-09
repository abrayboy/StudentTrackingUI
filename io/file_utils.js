const fs = require('fs');
const readline = require('readline');
const StudentDTO = require('./../dto/StudentDTO');
const constants = require('./../constants/Constants');

module.exports = {

    FileWriter: function() {

        this.errors = []

        this.writePdf = (file)  => {
            let fileName = "/Users/juallen/Desktop/jj.pdf"
            fs.writeFile(fileName, file, err => {
                if (err) console.log(err);
            });
            return fileName;
        }
    },

    FileReader: function() {

        this.readCsvHeaders = (_headers) => {
            let headers =_headers.split(",");
            return 1;
        }

        this.buildStudents = (file) => {
            'use strict';
            let students = [];     
            let str = fs.readFileSync(file, "utf8");
            let Constants = constants.Constants;
            let strSplit = str.split('\r\n');
            for(let i = 1; i < strSplit.length; i++) {
                    let fields = strSplit[i].split(',');
                    let dto = new StudentDTO.StudentDTO(fields[Constants.StudentId], fields[Constants.CoachName]);
                    console.info(dto);
                    students.push(dto);
            }
            console.log(students);
            return students;
        }
    }
};
const fs = require('fs');
const StudentDTO = require('./../dto/StudentDTO');
const constants = require('./../constants/Constants');
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
        this.Build = (file) => {
            'use strict';
            let students = [];     
            let str = fs.readFileSync(file, "utf8");
            let Constants = constants.Constants;
            let strSplit = str.split(os.EOL);
            for(let i = 1; i < strSplit.length; i++) {
                    let fields = strSplit[i].split(',');
                    let dto = new StudentDTO.Student(fields[Constants.StudentId], fields[Constants.CoachName],
                                                fields[Constants.FirstGen], fields[Constants.Race], fields[Constants.Disability],
                                                fields[Constants.Classification], fields[Constants.SevenTargetSchools],
                                                fields[Constants.NotifiedStudent], fields[Constants.ScholarshipMatchingComplete],
                                                fields[Constants.ScholarshipEssay], fields[Constants.ScholarshipDeadlines],
                                                fields[Constants.ScholarshipEssay3], fields[Constants.ReviewOfEssay],
                                                fields[Constants.CompletedFafsa], fields[Constants.AdmissionDeadlines],
                                                fields[Constants.Rejected], fields[Constants.Waitlisted],
                                                fields[Constants.Accepted], fields[Constants.CollegePacketComplete],
                                                fields[Constants.CoachFinalReview], fields[Constants.LOR],
                                                fields[Constants.Resume], fields[Constants.Interview],
                                                fields[Constants.Award]);
                    console.info(dto);
                    students.push(dto);
            }
            console.log(students);
            return students;
        }
    }
};
const fs = require('fs');
const readline = require('readline');
const StudentDTO = require('./../dto/StudentDTO');


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
            let students = [];     
            let str = fs.readFileSync(file, "utf8");
            for(let student of str.split('\r\n')) {
                if (student != ",,,,,,,,,,,,,,,,,,,,,,,,") {
                    let dto = new StudentDTO.StudentDTO(student.split(',')[0]);
                    students.push(dto.getStudent());
                }
            }
            console.log(students);
            return students;
        }
    }
};
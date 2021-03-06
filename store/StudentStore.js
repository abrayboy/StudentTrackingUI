const { Parser } = require('json2csv');
const csvFields = require('./../config/csv-fields');
const path = require('path');
const dto = require('./../dto/StudentDTO');
const fs = require('fs');
const logging = require('./../log/logger');


exports.StudentStore = function (studentManager, _store) {

    const self = this;
    let StudentManager = studentManager;

    let Store = _store;
    const Logger = new logging.Logger('StudentStore');

    const writeStudents = (filename, students, csvFileName) => {
        fs.writeFileSync(filename, JSON.stringify(students), 
        err => { if (err) throw err });
        let headers = csvFields.Fields;
        console.log(headers);
        let jsonCsv = new Parser({ headers });
        let csv = jsonCsv.parse(students);
        setTimeout(() => fs.writeFile(csvFileName, csv, err => { if (err) throw err}) , 3000  );
    };

    this.Add = (student) => {
        if (StudentManager.AddStudent(student) === true) {
            self.WriteToStore();
            Logger.info(`Add Student:${student.StudentId}`);
            return true;
        }
        Logger.error(`Could Not Add Student:${student.StudentId}`);
        return false;
    };

    this.Update = (student) => {
        if (StudentManager.UpdateStudent(student) === true) {
            self.WriteToStore();
            Logger.info(`Update Student:${student.StudentId}`);
            return true;
        }
        Logger.error(`Could Not Update Student:${student.StudentId}`);
        return false;
    };

    this.Delete = (student) => {
        if (StudentManager.DeleteStudent(student) === true) {
            self.WriteToStore();
            Logger.info(`Student Count: ${StudentManager.Students.length}`)
            Logger.info(`Delete Student:${student.StudentId}`);
            return true;
        }
        Logger.error(`Could Not delete Student:${student.StudentId}`);
        return false;
    };

    this.Renew = () => {
        var students = require('./../cache/store.json');
        Logger.info(`Renewing Store Context at ${new Date()}`);
        StudentManager = new dto.StudentManager(students);
        Store = path.join(__dirname, './../cache/store.json');
    };

    this.WriteToStore = (students = StudentManager.Students) => {
        writeStudents(Store, students, path.join(__dirname, './../students.csv'));
    };

}
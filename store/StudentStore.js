const StudentWriter = require('./../io/file_utils');

exports.StudentStore = function (studentManager, store) {

    const self = this;
    const StudentManager = studentManager;

    this.Store = store;

    this.SetStore = (_store) => {
        if (_store) self.Store = _store;
    };

    this.Add = (student) => {
        if (StudentManager.AddStudent(student) === true) {
            self.WriteToStore()
        }
    };

    this.Update = (student) => {
        if (StudentManager.UpdateStudent(student) === true) {
            self.WriteToStore()
        }
    };

    this.Delete = (student) => {
        if (StudentManager.DeleteStudent(student) === true) {
            self.WriteToStore();
        }
    };

    this.WriteToStore = (students = StudentManager.Students) => {
        const writer = new StudentWriter.FileWriter();
        writer.WriteStudents(self.Store, students);
    };
}
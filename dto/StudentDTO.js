
module.exports = {

    StudentDTO: function(_studentId) {

        let studentId = studentdId;

        this.getStudentId = () => studentId;

        this.setStudentId = (newStudentId) => {
            if (!newStudentId) {
                throw Error(`Cannot set StudentId:${newStudentId}`);
            }
            studentId = newStudentId;
        }
    }
}
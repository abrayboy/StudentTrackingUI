
module.exports = {

    StudentDTO: function(_studentId, firstGen, race,
                            disability, classification, sevenTargetSchools,
                            notifiedStudent, scholarshipMatchingComplete,
                            scholarshipEssay, scholarshipDeadLines,
                            scholarshipEssay3, reviewOfEssay, completedFafsa,
                            addmissionDeadlines, waitlisted, accepted,
                            collegePacketComplete, coachFinalReview, lor,
                            resume, interview, award) {

        this.StudentId = _studentId;

        this.getStudentId = () => this.StudentId;

        this.getStudent = () => {
            return {
                StudentId : this.StudentId
            }
        }

        this.setStudentId = (newStudentId) => {
            if (!newStudentId) {
                throw Error(`Cannot set StudentId:${newStudentId}`);
            }
            this.StudentId = newStudentId;
        }
    }
};
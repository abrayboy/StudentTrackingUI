const utils = require('./../util/utils');
module.exports = {

    Student: function (_studentId, coachName, firstGen, race,
        disability, classification, sevenTargetSchools,
        notifiedStudent, scholarshipMatchingComplete,
        scholarshipEssay, scholarshipDeadLines,
        scholarshipEssay3, reviewOfEssay, completedFafsa,
        admissionDeadlines, rejected, waitlisted,
        accepted, collegePacketComplete, coachFinalReview,
        lor, resume, interview, award) {

        this.StudentId = _studentId;
        this.CoachName = coachName;
        this.FirstGen = utils.TextToBool(firstGen);
        this.Race = race;
        this.Disability = utils.TextToBool(disability);
        this.Classification = classification;
        this.SevenTargetSchools = utils.TextToBool(sevenTargetSchools);
        this.NotifiedStudent = utils.TextToBool(notifiedStudent);
        this.ScholarshipMatchingComplete = utils.TextToBool(scholarshipMatchingComplete);
        this.ScholarshipEssay = utils.TextToBool(scholarshipEssay);
        this.ScholarshipDeadlines = scholarshipDeadLines;
        this.ScholarshipEssay3 = scholarshipEssay3;
        this.ReviewOfEssay = reviewOfEssay;
        this.CompletedFafsa = utils.TextToBool(completedFafsa);
        this.AdmissonDealines = admissionDeadlines;
        this.Rejected = utils.TextToBool(rejected);
        this.Waitlisted = utils.TextToBool(waitlisted);
        this.Accepted = utils.TextToBool(accepted);
        this.CollegePacketComplete = utils.TextToBool(collegePacketComplete);
        this.CoachFinalReview = coachFinalReview;
        this.Lor = lor;
        this.Resume = utils.TextToBool(resume);
        this.Interview = utils.TextToBool(interview);
        this.Award = utils.TextToCurrency(award);
    },

    StudentManager: function (_students) {

        const self = this;
        this.Students =  _students || [];

        this.SetStudents = (students) => {
            if (students) self.Students = students;
        };

        this.AddStudent = (student) => {
            if (!student) return { Message: `Cannot add student: ${student}` };
            if (!student.StudentId) return { Message: `Cannot add student with student id: ${student}` };
            let studentIds = self.Students.map(stu => stu.StudentId);
            if (studentIds.indexOf(student.StudentId) === -1) {
                self.Students.push(student)
                return true;
            }
            return { Message: `Duplicate entry for student: ${student.StudentId}` }
        };

        this.IndexOf = (student) => {
            let index = -1;
            for (let i = 0; i < self.Students.length; i++)
            {
                if (self.Students[i].StudentId == student.StudentId) {
                    index = i;
                    break;
                }
            }
            return index;
        };

        this.UpdateStudent = (student) => {
            let index = self.IndexOf(student);
            if (index !== -1) {
                self.Students[index] = student;
                return true;
            } 
            return false;
        };

        this.DeleteStudent = (student) => {
            let index = self.IndexOf(student);
            if (index !== -1) {
                self.SetStudents(self.Students.splice(index, 1));
                return true;
            }
            return false;
        };

        this.Get = (student) => {
            let index = self.IndexOf(student);
            return self.Students[index];
        }; 
    }
};
const utils = require('./../util/utils');
module.exports = {

    Student: function (_studentId, coachName, firstGen, race,
        disability, classification, sevenTargetSchools,
        notifiedStudent, scholarshipMatchingComplete,
        scholarshipEssay, scholarshipDeadLines,
        scholarshipEssay3, reviewOfEssay, collegeApplicationDeadlines, completedFafsa,
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
        this.CollegeApplicationDeadlines = collegeApplicationDeadlines;
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
    }
};
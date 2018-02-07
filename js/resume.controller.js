angular.module("myResumeApp").controller('baseController', function () {
    this.data = {
        "firstName": "Aman",
        "lastName": "Jain",
        "profiles": [
            { "name": "Linkedin", "logoClass": "fa-linkedin", "url": "https://www.linkedin.com/in/spidiweb/" },
            { "name": "GitHub", "logoClass": "fa-github", "url": "https://github.com/spidiweb" },
            { "name": "Stackoverflow", "logoClass": "fa-stack-overflow", "url": "https://stackoverflow.com/users/3226814/spidis-web" }
        ],
        "dob": "1992-05-25T18:30:00.000Z",
        "phone": "+91-8225054981",
        "email": "aman12260@gmail.com",
        "designation": "Software Engineer",
        "careerSummary": [
            { "order": 1, "value": "3 Years & 9 Months of Experience in JavaScript and AngularJs/Angular Framework" },
            { "order": 2, "value": "3 Years of Experience in .Net framework that includes proficiency in MVC, Web API, Win Services etc." },
            { "order": 3, "value": "Worked as a Full Stack Developer in several projects" },
            { "order": 4, "value": "Holds experience working in Agile and Scrum Methodology." },
            { "order": 5, "value": "Experience in deploying projects and leading small team." },
            { "order": 6, "value": " Good problem-solving ability, focused and active member for achieving team goals." },
            { "order": 7, "value": " Quick Learner, highly curious and highly adaptable to new Technologies." }
        ],
        "education": [
            { "name": "10th", "passingYear": "2010", "marks": "60.8%" },
            { "name": "12th", "passingYear": "2014", "marks": "63%" },
            { "name": "B.E, Computer Science", "passingYear": "2014", "marks": "7.25/10 CGPA" }
        ],
        "companies": [
            { "order": 1, "name": "InfoBeans Technologies Limited, Indore", "from": "2014-04-20T18:30:00.000Z", "to": "2017-04-11T18:30:00.000Z", "highlights": [{ "order": 1, "value": "Trainee (April 2014 to August 2014)" }, { "order": 2, "value": "Trainee Software Engineer (September 2014 to March 2015)." }, { "order": 3, "value": "Associate Software Engineer (April 2015 to March 2016)." }, { "order": 4, "value": "Software Engineer (April 2016 to April 2017)." }] },
            { "order": 2, "name": "Zensar Technologies, Pune", "from": "2017-04-13T18:30:00.000Z", "to": null, "highlights": [{ "order": 1, "value": "Software Engineer (April 2017 to Present)." }, { "order": 2, "value": "Worked Onsite as Angular Specialist for current client at Johannesburg, South Africa" }, { "order": 3, "value": "Continue working as Angular Specialist from Offshore." }] }
        ],
        "technologyStack": [
            { "order": 1, "name": "Angular", "rating": 3 },
            { "order": 1, "name": "AngularJS", "rating": 3 },
            { "order": 1, "name": "JavaScript", "rating": 3 },
            { "order": 1, "name": "jQuery", "rating": 3 },
            { "order": 1, "name": "HTML/CSS", "rating": 3 },
            { "order": 1, "name": "Bootstrap", "rating": 3 },
            { "order": 1, "name": "SQL/T-SQL", "rating": 3 },
            { "order": 1, "name": "Oracle", "rating": 3 },
            { "order": 1, "name": "C#/Java(SE)", "rating": 3 },
            { "order": 1, "name": "WebForm", "rating": 3 },
            { "order": 1, "name": "MVC", "rating": 3 },
            { "order": 1, "name": "Web API", "rating": 3 }
        ],
        "achievements": [
            { order: 1, name: "Appreciated by Client for showing the great understanding of the product and suggesting UX solutions." },
            { order: 2, name: "Appreciated for finding Security Bugs and suggesting solutions in a crucial internal project." },
            { order: 3, name: "Appreciated for managing time to help another team on a project to speed up the development." },
            { order: 4, name: "Selected for SAP Scholar Program in 2014." },
            { order: 5, name: "Selected for TCS ILP Program in 2014." },
            { order: 6, name: "Won the 2nd prize in “Debugging” at BIRT Technical Festival." },
            { order: 7, name: "Appreciated for organizing College Technical festival in 2012-2013." }
        ]
    };

    this.configData = {
        'sideNavOptions': [
            { name: "About", url: "#about" },
            { name: "Career Summary", url: "#summary" },
            { name: "Experience", url: "#experience" },
            { name: "Education", url: "#education" },
            { name: "Skills", url: "#skills" },
            { name: "Interests", url: "#interests" },
            { name: "Achievements", url: "#awards" },
        ]
    };

    this.getProfileDetails = function (profile) {
        let profiles = this.data.profiles;

        let selectProfile = profiles.filter((prof, index) => {
            return prof.name.toLowerCase() === profile.toLowerCase();
        })

        return selectProfile;
    }
});
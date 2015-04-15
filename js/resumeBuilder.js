var bio = {
	"name" : "Nelly Gallego",
	"role" : "Web Developer",
	"contacts" : [{
		"mobile" : "954-471-3007",
		"email" : "nellygallego@bellsouth.net",
		"Github" : "nellyga", 
		"location" : "FLorida",
		"Twitter" :"gnellyga12"
		
	}],	
	"welcomeMessage" : "I'm an ambitious technology professional who finds pleasure in developing software and growing businesses using innovative thinking and tested techniques.", 
	"biopic" : "images/mona_lisa-2.jpg",
	
	"skills" : ["Motivated","Responsible","Love to teach","Energetic","Creative Thinker","Bilingual","Goal Oriented"]
};

var work = {
	"jobs" : [
	{
		"employer" : "AT&T", 
		"title" : "WMS Software Development ",
		"dates" : "2013 - 2015",
		"location" : "Florida",
		"description" : "Created a console application for field operations department to send out an email each day after every shift so that the managers can keep track of Revenue, Non-Revenue affecting tickets from the internal Ticket system. The application uses SQL database. Database gets updated every minute by job so that even if a field engineer makes a change to the ticket at the last minute of the shift then those changes to the tickets can also be captured (C#)."
	},
	{
		"employer" : "PRMA", 
		"title" : "IT Manager / Programming / Database Design",
		"dates" : "2010 - 2014",
		"location" : "Florida",
		"description" : "Created reports based on SQL Server database: Shareholder ownership reports detailing number of Shares, options exercised reports held and dividends earned/Full SEC accounting reports through to CPA Audited Financial Statements using Visual Studio Reporting."	
	},
	{
		"employer" : "POWER IMAGES", 
		"title" : "Programmer",
		"dates" : "2007 - 2010",
		"location" : "New York",
		"description" : "Senior Programmer for several projects for Motorola Web site using ASP.NET with (VB, C#), SQL Server back-end interactive with flash MX and Action Script."	
	},
	{
		"employer" : "DHL", 
		"title" : "IT Manager / Programming / Database Design",
		"dates" : "2002 - 2007",
		"location" : "Florida",
		"description" : "Developed the CURE CARD project which provides essential customer information and allows the users to search for a specific CAM code.  All customer information is stored and provided to all sales and management instantaneously via Intranet. The information is provided by customer by region, district and area. This application was development in ASP.NET using VB Language."	
	}]
};
var projects = {
	"project" : [{
		"title" : "WEBSITE PRMA",
		"dates" : "2010", 
		"description" : "PRMA Holdings through its family of companies will introduce investment, technology, innovation and intellectual capital and expertise to modernise the physicians practice.", 
		"images" : ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"]
	},
	{
		"title" : "WEBSITE PROMED-ALLIANCE",
		"dates" : "2014", 
		"description" : "The interest of the Physician and Promed are alligned. Profitability, efficiency, and Physician satisfaction.", 
		"images" : ["images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "University Of Medellin",
		"location" : "Colombia",
		"degree" : "Bachelor", 
		"majors" : "Math",
		"dates" : "1984 - 1988",
		"url" : "http://www.udem.edu.co"
	},
	{
		"name" : "Florida International University",
		"location" : "Florida",
		"degree" : "Associate", 
		"majors" : "Computer science",
		"dates" : "1996 - 1998",
		"url" : "http://www.fiu.edu/"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2015 - Future",
		"url" : "https://www.udacity.com/course/nd001"
	},
	{
		"title" : "Programming C#",
		"school" : "Pluralsight",
		"dates" : "2014 - 2015",
		"url" : "http://www.pluralsight.com"
	}]
};
education.display = function() {
		
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			 
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%contact%","Github").replace("%data%",bio.contacts[contact].Github);
		var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
		var formattedTwitter =HTMLtwitter.replace("%data%", bio.contacts[contact].Twitter);
       	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	};
};



work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
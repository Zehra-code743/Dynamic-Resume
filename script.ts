document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById("Profilepicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    if ( profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class"profilePicture";"/>` : ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>
            
            <h3>Work Experience</h3> 
            <p>${experience}</p> 

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("One or more elements are missing");
        }
    }
});

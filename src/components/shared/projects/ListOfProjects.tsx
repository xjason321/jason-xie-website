import Project from "@/components/shared/projects/Project"

export function ListOfProjects() {
    return(
        <>
        {/* Spinor AI */}
        <Project
            title="Spinor AI"
            date="June 2024 - Present"
            description="A startup tool that helps enhance prompts for Midjourney using a simple menu."
            hasAward={false}
            significance="Microsoft for Startups - Sponsored Project"
            awardLink=""
            techStack="React, Python, MongoDB, AWS, Azure"
            imagePath="/jason-xie-website/assets/projects/spinorai/image.png"
            liveLink="https://spinor-ai.com"
            githubLink=""
            videoPath='/jason-xie-website/assets/projects/spinorai/video.mp4'
        />

        {/* B2C-Chatbots */}
        <Project 
            title="B2C-Chatbots"
            date="April - May 2024"
            description="A quickly-interfacable and customizable chatbot framework for businesses to integrate on front pages."
            hasAward={false}
            significance="Personal Project"
            awardLink=""
            techStack="Python (Rasa), JavaScript, HTML"
            imagePath="/jason-xie-website/assets/projects/b2c-chatbots/image.png"
            liveLink=""
            githubLink="https://github.com/xjason321/b2c-chatbots"
            videoPath='/jason-xie-website/assets/projects/b2c-chatbots/video.mp4'
        />

        {/* LensCook */}
        <Project 
            title="LensCook"
            date="Jan 2024"
            description="A web app developed during a 36-hour hackathon that curates recipes based on ingredients in an uploaded image."
            hasAward={true}
            significance="Hackathon by the Sea - First Place App"
            awardLink="https://www.youtube.com/watch?v=rtS5ua4Xm2k"
            techStack="Python (Streamlit), Flutter, Firestore, RESTAPIs"
            imagePath="/jason-xie-website/assets/projects/lenscook/image.png"
            liveLink=""
            githubLink="https://github.com/SD-Coder24/LensCook"
            videoPath=''
        />

        {/* Infect ID */}
        <Project 
            title="Infect-ID"
            date="December 2023"
            description="A web app that visualizes the spread of a disease and uses machine learning to predict a patient-zero."
            hasAward={true}
            significance="Congressional App Challenge - CA-26 Winner"
            awardLink="https://www.congressionalappchallenge.us/23-CA26/"
            techStack="Python (Flask), JavaScript"
            imagePath="/jason-xie-website/assets/projects/infectid/image.png"
            liveLink="https://pzerofinder.pythonanywhere.com/"
            githubLink="https://github.com/xjason321/Infect-ID"
            videoPath='/jason-xie-website/assets/projects/infectid/video.mp4'
        />
      </>
    )
}

export default ListOfProjects;

import Project from "@/components/shared/projects/Project"

export function ListOfProjects() {
    return(
        <>
        {/* Diagnosis */}
        <Project
            title="Diagnosis"
            date="July 2023"
            description="A neural network trained off Pima Indians dataset that diagnoses diabetes based on inputted factors such as BMI."
            hasAward={true}
            significance="CSYA Hacks - 7th Place Novice Track App"
            awardLink="https://devpost.com/software/dia-gnosis"
            techStack="Python (Flask, Tensorflow)"
            imagePath="/jason-xie-website/assets/projects/diagnosis/image.png"
            liveLink="https://diagnosis.pythonanywhere.com/"
            githubLink="https://github.com/xjason321/Dia-gnosis"
            videoPath=''
        />

        {/* Trash AI */}
        <Project
            title="Trash AI"
            date="July 2023"
            description="A convolutional neural network developed to accurately classify types of garbage from images."
            hasAward={true}
            significance="Hackbytes II Hackathon - 2nd Place App"
            awardLink="https://devpost.com/software/trash-ai-7jvxt1"
            techStack="Python (Flask, Tensorflow)"
            imagePath="/jason-xie-website/assets/projects/trashai/image.png"
            liveLink="https://trashai01.pythonanywhere.com/"
            githubLink="https://github.com/xjason321/Trash-AI"
            videoPath='/jason-xie-website/assets/projects/trashai/video.mp4'
        />

        {/* Rune AI */}
        <Project
            title="Rune AI"
            date="June 2023"
            description="A neural-network-backed website capable of recognize letters from human drawings."
            hasAward={false}
            significance="Personal Project"
            awardLink=""
            techStack="Python (Flask)"
            imagePath="/jason-xie-website/assets/projects/runeai/image.png"
            liveLink="https://runeai.pythonanywhere.com/"
            githubLink="https://github.com/xjason321/RuneAI"
            videoPath=''
        />

        {/* 2 Player Winter Suika */}
        <Project
            title="Winter Suika Game"
            date="Jan 2024"
            description="A two-player fruit dropper game with winter elements and Animal Crossing Music."
            hasAward={false}
            significance="Personal Project"
            awardLink=""
            techStack="Python (SocketIO, Pygame, Pillow)"
            imagePath="/jason-xie-website/assets/projects/suika/image.png"
            liveLink=""
            githubLink="https://github.com/xjason321/2-Player-Winter-Suika"
            videoPath='/jason-xie-website/assets/projects/suika/video.mp4'
        />

        {/* Please Don't Catch Bombs */}
        <Project
            title="Please Don't Catch Bombs"
            date="February - March 2023"
            description="A two-player fruit dropper game with winter elements and Animal Crossing Music."
            hasAward={false}
            significance="Personal Project"
            awardLink=""
            techStack="Python (Pygame, Pillow)"
            imagePath="/jason-xie-website/assets/projects/dontcatchbombs/image.png"
            liveLink=""
            githubLink="https://github.com/xjason321/2-Player-Winter-Suika"
            videoPath='/jason-xie-website/assets/projects/dontcatchbombs/video.mp4'
        />

        {/* Rotated Chess w/ Minimax Algorithm */}
        <Project
            title="Chess w/ Minimax Algorithm"
            date="September 2022"
            description="A chess game with an end screen, minimax algorithm, and (of course) bugs!"
            hasAward={false}
            significance="Personal Project"
            awardLink=""
            techStack="Python (Pygame, Pillow)"
            imagePath="/jason-xie-website/assets/projects/chess/image.png"
            liveLink="https://replit.com/@JasonXie14/Chess-Game?v=1"
            githubLink=""
            videoPath=''
        />
      </>
    )
}

export default ListOfProjects;

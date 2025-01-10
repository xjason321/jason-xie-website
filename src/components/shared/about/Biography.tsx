import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Name from '@/components/shared/_global/Name';
import Profiles from '@/components/shared/_global/Profiles';

const Biography: React.FC = () => {
    return (
        <Box display="flex" flexDirection="row" alignItems="start" p={4} className="space-x-10 mx-auto justify-center">
            {/* Left Side */}
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar 
                    alt="Jason Xie" 
                    src="/jason-xie-website/assets/profile.png" 
                    sx={{ width: 100, height: 100, mb: 2 }} 
                />
                <Typography variant="h4" component="h1" gutterBottom>
                    <Name />
                </Typography>
                <h2 className="my-3">
                    software developer
                </h2>

                <Profiles isAbsolute={false}/>

            </Box>
            
            {/* Right side */}
            <Typography variant="body1" align="left" className="sm:text-sm text-md">
                Hey there! I'm Jason. c: 
                <br /><br />
                I am a junior-level student at the University of Wisconsin- Madison 
                majoring in computer science. I’ve gained a strong foundation in 
                object-oriented programming and data structures and algorithms. 
                <br /><br />
                In my current role at Spinor AI, I build website content using my knowledge in React, 
                maintain frontend to backend communication through RESTful APIs, and create the structure 
                for the database that securely stores user information. My experiences have taught me 
                how to pick up new frameworks and languages quickly, efficiently manage Git repositories, and 
                more significantly, how I can apply those skills to drive success.
                <br /><br />
                Interested in collaborating on projects? Please don't hesitate to connect and reach out via email at xjason321@gmail.com.
            </Typography>
        </Box>
    );
};

export default Biography;
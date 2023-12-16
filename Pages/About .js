import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">WELCOME TO DAILY FRESH</Typography>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ducimus, nisi, inventore quaerat laudantium aliquam aspernatur quod, itaque non atque odit! Tempore placeat maxime sapiente nobis tempora beatae commodi voluptates.

       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ducimus, nisi, inventore quaerat laudantium aliquam aspernatur quod, itaque non atque odit! Tempore placeat maxime sapiente nobis tempora beatae commodi voluptates.

        </p>
    
       
      </Box>
    </Layout>
  );
};

export default About;
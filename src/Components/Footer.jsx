import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box,  Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ background: "black" }}>
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={styles.heading}>
                <Typography variant={"h6"} style={{ color: "white" }}>
                  UseFull Links
                </Typography>
              </li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={styles.heading}>
                <Typography variant={"h6"} style={{ color: "white" }}>
                  Important Links
                </Typography>
              </li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
              <li>
                <Link style={styles.link}> Footer</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={styles.heading}></li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
              <li>
                <Link style={styles.link}>Important Link</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={styles.heading}>
                <Typography variant={"h6"} style={{ color: "white" }}>
                  Available on
                </Typography>
              </li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
              <li>
                <Link style={styles.link}>component Footer</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        
    

        <Box style={{marginTop:20}}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Typography style={{ color: "white" }}>
                
                Copyright © VideoInvites.net 2023.All rights reserved.
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography align="right" style={{ color: "white" }}>
                
                Made with in India
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
export default Footer;
const styles = {
  link: {
    color: "#ffffff94",
    textDecoration: "none",
    merginBottom: 10,
    fontSize: 18,
    "&:hover": {
      color: "white",
    },
  },

  heading: {
    "&::before": {
      content: "",
      display: "block",
      height: 60,
      marginTop: 60,
      width: 100,
      position: "absolute",
    },
  },
};

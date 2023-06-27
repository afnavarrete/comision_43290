import { Box, Grid } from "@mui/material";

const MaterialUI = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "red", height: "200px" }}>
      <Grid container flex justifyContent={"space-between"}>
        <Grid item xs={12} md={6}>
          <h2 style={{ width: "100%", backgroundColor: "red" }}> Caja Uno </h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2 style={{ width: "100%", backgroundColor: "blue" }}> Caja Dos </h2>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaterialUI;

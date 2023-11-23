import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

const PersonalityDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar link="/PersonalityDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Quote Clear"
            navigateTo="PersonalityQuoteClear"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalityDash;

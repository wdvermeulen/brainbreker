import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import { url } from "../../SiteRoute";

const GameTypeSelection = () => (
  <Grid container spacing={2} sx={{ overflowY: "auto" }}>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>Een makkelijk op te zetten quiz met meerkeuzevragen.</p>
        </CardContent>
        <CardActions>
          <Link to={url.NEW_GAME}>
            <Button variant="outlined" color="secondary">
              {I18n.get("Setup a standard game")}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>
            Een pubquiz opgedeeld in gedeeltes met open vragen. Antwoorden
            worden achteraf met de hand gecontroleerd.
          </p>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            disabled
          >
            {I18n.get("Setup a pub game")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>
            Spel waarin teams raadsels, puzzels en opdrachten moeten doen om tot
            het einde te komen.
          </p>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            disabled
          >
            {I18n.get("Setup an online escape room")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>Speel solo en kies jouw puzzel uit de marktplaats.</p>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            disabled
          >
            {I18n.get("Play a solo puzzle")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>Complete vrijheid om jouw spel te maken.</p>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            disabled
          >
            {I18n.get("Custom game")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item sm={6} md={3} lg={2} xl={1}>
      <Card variant="outlined">
        <CardContent>
          <p>Ga naar een overzicht van door jou opgeslagen spellen.</p>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={url.GAMES}
            color="secondary"
            variant="outlined"
          >
            {I18n.get("Load stored games")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default GameTypeSelection;

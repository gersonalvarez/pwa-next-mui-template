import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const todosLosPintores = [
  { barrio: 'Lugano 1 y 2'},
  { barrio: 'Lugano 1 y 2'},
  { barrio: 'Lugano 1 y 2'},
  { barrio: 'Caballito'},
  { barrio: 'Caballito'},
  { barrio: 'Caballito'},
  { barrio: 'Caballito'},
  { barrio: 'Boedo'},
  { barrio: 'Boedo'},
]

var pintores = todosLosPintores;


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Grid container spacing={8}>
    {Array.from(pintores).map((pintor, _) => (
        <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            }
            title="Carlos Escalera"
            subheader={pintor.barrio}
          />
          <CardMedia
            component="img"
            height="180"
            image="https://www.milideas.net/wp-content/uploads/dormitorios-encantadores-1.jpg"
            alt="Casa"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Me llamo Carlos vivo en Celina y trabajo hace 5 años.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
    </Grid>
  );

}

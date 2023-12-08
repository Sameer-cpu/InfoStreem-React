import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { truncateString } from "../../Utilities/HelperMethods";
import { Link } from "@mui/material";

interface Props {
  title: string;
  uri: string;
  description: string;
  newsURL: string;
}

export const NewsCard: React.FC<Props> = ({
  description = "",
  title,
  uri,
  newsURL,
}) => {
  if (uri == null) {
    return null;
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: 345, display: "block" }}
        image={uri}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {truncateString(title, 20)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={newsURL}>More</Link>
        {/* <Button size="small" href={newsURL}>
          
        </Button> */}
      </CardActions>
    </Card>
  );
};

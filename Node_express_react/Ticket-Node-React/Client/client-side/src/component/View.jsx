import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import { Link, useParams} from "react-router-dom";
import axios from 'axios'
function View() {
  const [dat, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getSingleUser(id);
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`/ticket/${id}`);
    if (response.status === 200) {
      setData({ ...response.data[0] });
    }
  };

  return (
    <>
      <Stack ml={5}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* {data &&
            data.map((dat, index) => ( */}
              <Grid m={1} >
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={dat.image}
                    alt="Paella dish"
                  />
                  <Typography color={"primary"} variant="h4" ml={2}>
                    {dat.title}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {dat.description}
                    </Typography>
                    <Stack direction={"row"} spacing={2} mb={1} mt={3}>
                      <Typography color={"primary"} variant="h5">
                        Date:
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {dat.date}
                      </Typography>
                    </Stack>

                    <Stack direction={"row"} spacing={2} mb={1} mt={1}>
                      <Typography color={"primary"} variant="h5">
                        Place:
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {dat.place}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2} mt={1}>
                      <Typography color={"primary"} variant="h5">
                        Price:
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        ${dat.price}
                      </Typography>
                    </Stack>
                    <Stack
                      spacing={2}
                      direction="row"
                      mt={3}
                      alignItems="center"
                      justifyContent="end"
                    >
                      <Link to={`/`} className="link-new">
                        <Button variant="contained">Back</Button>
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            {/* ))} */}
        </Grid>
      </Stack>
    </>
  );
}

export default View;

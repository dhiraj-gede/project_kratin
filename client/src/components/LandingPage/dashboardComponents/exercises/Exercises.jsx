import React, { useEffect, useState } from "react";
import "./exercises.css";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";

const Header = ({ setExercises }) => {
  const [btnList] = useState(["All", "Body parts", "Equipments", "Muscles"]);
  const [selectedBtn, setSelectedBtn] = React.useState("All");

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    name: "",
    type: "",
  });

  const handleChange = (btn) => {
    setSelectedBtn(btn);
  };
  const performAPICall = async () => {
    try {
      let extention = "/";
      const url = "https://17a5bc67-190d-4381-a7bd-8abcf7692c3f.mock.pstmn.io";
      if (selectedBtn === "Body parts") {
        extention += "bodyPartList";
      } else if (selectedBtn === "Equipments") {
        extention += "equipmentList";
      } else if (selectedBtn === "Muscles") {
        extention += "targetList";
      }

      const res = await axios.get(url + extention);

      if (selectedBtn !== "All") {
        setFilters(await res.data);
      } else {
        setExercises(await res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectFilter = (filter) => {
    if (selectedBtn === "Body parts") {
      setSelectedFilter({ name: "bodypart", type: filter });
    } else if (selectedBtn === "Equipments") {
      setSelectedFilter({ name: "equipment", type: filter });
    } else if (selectedBtn === "Muscles") {
      setSelectedFilter({ name: "target", type: filter });
    }
  };

  const performAPICall2 = async (extention) => {
    try {
      const url = "https://17a5bc67-190d-4381-a7bd-8abcf7692c3f.mock.pstmn.io/";
      const res = await axios.get(url + extention);
      setExercises(await res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const extention = selectedFilter.name + "/" + selectedFilter.type;
    performAPICall2(extention);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  useEffect(() => {
    performAPICall();
  }, [selectedBtn]);
  return (
    <nav className="Exercises">
      <Box style={{ display: "flex" }}>
        {btnList.map((btn, index) => {
          return (
            <Button
              key={index}
              variant={selectedBtn === btn ? "contained" : "outlined"}
              style={{
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleChange(btn)}
            >
              {btn}
            </Button>
          );
        })}
      </Box>

      {selectedBtn !== "All" ? (
        <>
          {filters.map((filter, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleSelectFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </>
      ) : (
        ""
      )}
    </nav>
  );
};

const MediaCard = ({item}) => {
 
  return (
    <Card sx={{ minWidth:350, minHeight: 350,  maxHeight: 430, background: "gray" }}>
      <CardMedia
      className="img_gif"
        component="img"
        height="320"
        image={item.gifUrl|| ''}
        alt={item.name|| ''}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
           {item.name.toUpperCase()} 
        </Typography> 
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent:'space-around'}}>
       
        <Typography variant="h5" color="text.secondary">
           Target: {item.bodyPart.toUpperCase()}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Equipment: {item.equipment.toUpperCase()}
        </Typography>
      </CardActions>
    </Card>
    
  );
};

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    console.log("exercises", exercises);
  }, [exercises]);
  return (
    <Box>
      <Header setExercises={setExercises} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* <MediaCard item={exercises[0]} /> */}
        <Grid container spacing={3} style={{maxHeight:'88vh', overflow:'auto'}}>
          {exercises.map((item, index) => (
            <Grid item lg={4} sm={12}  key={item.id}>
              <MediaCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Exercises;

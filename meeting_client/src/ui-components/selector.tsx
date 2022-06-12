
import React, { useState } from "react"
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useContext } from "react";
import { UserContext } from "../UserContext";


export default function BasicSelect(props: any) {
  // const [team, setTeam] = React.useState('');
  const { catalog } = props;
    const initialTeam: { team_name: string | null } = { team_name: null }
    const [team_name, setTeam_name] = useState(initialTeam)
  const { team, setTeam } = useContext(UserContext);

  const handleChange = (event: any) => {
    setTeam_name({team_name: event.target.value});
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Age"
          onChange={handleChange}
        >
          {catalog.map((item: any) => (
            <MenuItem value={item.team_id}>{item.team_name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function Preloader() {
  return (
    <div >
      <div ></div>
    </div>
  );
}

export { Preloader };

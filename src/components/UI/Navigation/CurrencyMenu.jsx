import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
export default function CurrencyMenu() {
  const [age, setAge] = React.useState(20);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <Box sx={{ ml: "10px" }}>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, border: "1px solid transparent" }}
        >
          <Select
            sx={{ border: "1px solid transparent" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
            IconComponent={() => <BsChevronDown />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
  );
}
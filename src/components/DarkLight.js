// import { FormGroup } from "@mui/material";
import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MaterialUISwitch from "./MaterialSwitch";
import { color } from "@mui/system";



const DarkLight = () => {

   

  


    <MaterialUISwitch />
  return (
    <>
    <div className="switch1" style={{ width:"200px", backgroundColor:"green", borderRadius:"10px"}}>

    
      <FormGroup>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          label="MUI switch"
         
        />
      </FormGroup>
      </div>
    </>
  );
};

export default DarkLight;

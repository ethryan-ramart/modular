import { Button, Grid } from "@mui/material";
import React from "react";
import forgotStyles from "@/styles/forgotStles";

export default function Forgot() {
  return (
    <Grid container sx={forgotStyles.body}>
      <Grid item sx={forgotStyles.box}>
        <h1>DOCify</h1>
        <input placeholder="Email" className="input" name="email" type="text" />
        <Button sx={forgotStyles.submitButton}>Recuperar</Button>
        <div>
          <a className="textos-anchor" href="/login">
            ¿Ya tienes Cuenta?
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

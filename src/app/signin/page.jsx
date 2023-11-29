import { Button, Grid } from "@mui/material";
import React from "react";
import signInStyles from "@/styles/signInStyles";

export default function SignIn() {
  return (
    <Grid container sx={signInStyles.body}>
      <Grid item sx={signInStyles.box}>
        <h1>DOCify</h1>
        <input placeholder="Email" className="input" name="email" type="text" />
        <br />
        <input
          placeholder="Contraseña"
          className="input"
          name="password"
          type="password"
        />
        <Button sx={signInStyles.submitButton}>Crear</Button>
        <div>
          <a className="textos-anchor" href="/login">
            ¿Ya tienes Cuenta?
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

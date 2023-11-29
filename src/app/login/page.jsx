import { Button, Grid } from "@mui/material";
import React from "react";
import loginStyles from "../../styles/loginStyles";

export default function Login() {
  return (
    <Grid container sx={loginStyles.body}>
      <Grid item sx={loginStyles.box}>
        <h1>DOCify</h1>
        <input placeholder="Email" className="input" name="email" type="text" />
        <br />
        <input
          placeholder="Password"
          className="input"
          name="password"
          type="password"
        />
        <a className="textos-anchor" href="/forgot">
          ¿Se te olvidó tu contraseña?
        </a>
        <Button sx={loginStyles.submitButton}>Iniciar Sesion</Button>
        <div>
          <a className="textos-anchor" href="/signin">
            ¿No tienes Cuenta?
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

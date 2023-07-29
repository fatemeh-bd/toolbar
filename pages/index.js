import Head from "next/head";

import Toolbar from "../src/components/toolbar/Toolbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Properties from "../src/components/properties/Properties";
import Designer from "../src/components/designer/Designer";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Item>
                <Toolbar />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Designer />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Properties />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}
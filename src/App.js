import { Grid } from "@mui/material";
import {Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import CrudTable from "./components/Table";
import Login from "./login";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={5}>
            <Form />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <CrudTable />
          </Grid>
        </Grid>
        {/* <Login/> */}
      </div>
    </Provider>
  );
}

export default App;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { setTaskSlice } from "../redux-toolkit/slice/task";
import { deleteTasksSlice } from "../redux-toolkit/slice/tasks";
import { DELETE_TASK_BY_ID, GET_TASKS } from "../redux-toolkit/sagas/types";
import axios from "axios";

export default function CrudTable() {
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const post = async() => {
    axios.defaults.baseURL = "https://task.samid.uz/v1";
    const headers = {
      Authorization:
        "Bearer e0kF3CB8yVBuJZ-8HVDBZkXp6qSxSkbvnDLOBcCKRzvvAflxXP7_NmaoooNCNjRW",
    };
     const getApi = await axios.get(`/task`, { headers });
      console.log('get api',getApi);
      return getApi
  }

  React.useEffect(() => {
    // post()
     dispatch({ type: GET_TASKS });
    console.log("rows", rows);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>number</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.id + 1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => dispatch(setTaskSlice(row))}
                  fullWidth
                  variant="contained"
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                {/* <Button  onClick={() => dispatch(deleteTasksSlice(row.id))} fullWidth variant="contained"> */}
                <Button
                  onClick={() =>
                    dispatch({ type: DELETE_TASK_BY_ID, id: row.id })
                  }
                  fullWidth
                  variant="contained"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

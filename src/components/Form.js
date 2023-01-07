import { Button, Container, Grid, Input } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_TASK, UPDATE_TASK_BY_ID } from '../redux-toolkit/sagas/types'
import { setTaskSlice } from '../redux-toolkit/slice/task'
// import { addTasksSlice, editTasksSlice } from '../redux-toolkit/slice/tasks'

export default function Form() {
  const task = useSelector(state => state.task)
  const dispatch = useDispatch()
  const HandleChange =(prop) => (e) => {
    dispatch(setTaskSlice({...task, [prop]:e.target.value}))
  }

  const HandleSubmit = () => {
    task.id == 0 ? dispatch({type:CREATE_TASK, task:{...task, id:nanoid(8)}})   : dispatch({type:UPDATE_TASK_BY_ID, task})
    dispatch(setTaskSlice(
      {
          id: 0,
          number: 0,
          title: "",
          description: "",
          status: 0,
        }
    ))
  }
  return (
    <>
        <Container>
          <Input value={task.id} fullWidth onChange={HandleChange('id')}  />
          <Input onChange={HandleChange('number')} placeholder="raqamni kiriting" value={task.number} fullWidth />
          <Input onChange={HandleChange('title')} placeholder="title kiriting" value={task.title} fullWidth  />
          <Input onChange={HandleChange('description')} placeholder="description kiriting" value={task.description} fullWidth  />
          <Input onChange={HandleChange('status')} placeholder="status kiriting" value={task.status} fullWidth  />
          <Button onClick={() => HandleSubmit()} fullWidth variant='contained'>Submit</Button>
        </Container>
    </>
  )
}

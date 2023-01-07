import { put, takeEvery } from "redux-saga/effects"
import { createApi, deleteApi, getApi, getApiById, signInApi, updateApi } from "../../apis"
import { setSignInSlice, setToken } from "../slice/signIn"
import { setTaskSlice } from "../slice/task"
import { addTasksSlice, deleteTasksSlice, editTasksSlice, getTasksSlice } from "../slice/tasks"
import { CREATE_TASK, DELETE_TASK_BY_ID, GET_TASKS, GET_TASK_BY_ID, SIGN_IN, UPDATE_TASK_BY_ID } from "./types"


export function* getTasksSaga(){
    const tasks = yield getApi();
    console.log('get tasks => ', tasks?.data);
    yield put(getTasksSlice(tasks?.data?.data))
}
export function* getTaskByIdSaga(action){
     yield getApiById(action.id)
    console.log('getTaskByIdSaga action => ', action);
    yield put(setTaskSlice(action.id))
}
export function* createTaskSaga(action){
    yield createApi(action.task)
    console.log('createTaskSaga action => ', action);
    yield put(addTasksSlice(action.task))
}
export function* updateTaskSaga(action){
    yield updateApi(action.task)
    console.log('updateTaskSaga action => ', action);
    yield put(editTasksSlice(action.task))
}
export function* deleteTaskByIdSaga(action){
    yield deleteApi(action.id)
    console.log('deleteTaskByIdSaga action => ', action);
    yield put(deleteTasksSlice(action.id))
}
export function* signInSaga(action){
    console.log('signINSaga action => ', action);
    // yield signInApi(action.signIn)
    // yield put(setToken(action.data?.token))
}

export function* watchTasksAsync() {
    yield takeEvery(GET_TASKS, getTasksSaga)
    yield takeEvery(GET_TASK_BY_ID, getTaskByIdSaga)
    yield takeEvery(CREATE_TASK, createTaskSaga)
    yield takeEvery(UPDATE_TASK_BY_ID, updateTaskSaga)
    yield takeEvery(DELETE_TASK_BY_ID, deleteTaskByIdSaga)
    yield takeEvery(SIGN_IN, signInSaga)
}
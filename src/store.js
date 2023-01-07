import { configureStore } from "@reduxjs/toolkit";
import task from "./redux-toolkit/slice/task";
import tasks from "./redux-toolkit/slice/tasks";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./redux-toolkit/sagas";
import signIn from "./redux-toolkit/slice/signIn";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    task,
    tasks,
    signIn
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);

export default store;

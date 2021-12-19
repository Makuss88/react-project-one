import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHTTP from './hooks/use-http';

import { URL } from './helper'; //mój dodatek

function Ap() {
  const [tasks, setTasks] = useState([]);

  // // 1.
  // const transformTask = useCallback((tasksObj) => { //dodanie useCallback
  //   const loadedTasks = [];
  //   for (const taskKey in tasksObj) {
  //     loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
  //   };
  //   setTasks(loadedTasks);
  // }, []);

  const { isLoading, error, sendRequest: fetchTasks } = useHTTP(); // zmiana use-http, co innego podaje, na dzień dobry

  useEffect(() => {
    //2.
    const transformTask = (tasksObj) => { //bez useCallback
      const loadedTasks = [];
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      };
      setTasks(loadedTasks);
    };


    console.log("szukam")
    fetchTasks(
      { url: URL },
      transformTask
    );
  }, [fetchTasks]); // generalnie mamy problem z ciagłym szukaniem, wiec dodaje useCallback-nr1, lub bez-nr2

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default Ap;

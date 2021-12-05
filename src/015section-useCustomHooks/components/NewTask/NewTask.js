import useHTTP from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { URL } from '../../helper';

const NewTask = (props) => {

  const { isLoading, error, sendRequest: sendTaskRequest } = useHTTP()


  const enterTaskHandler = async (taskText) => {
    const createdTask = (taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    }
    sendTaskRequest({
      url: URL,
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: { text: taskText },
    }, createdTask);
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

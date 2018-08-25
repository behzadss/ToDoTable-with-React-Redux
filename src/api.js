import axios from 'axios';
import sampleSize from 'lodash/sampleSize';

export async function validateTodoTitleUnique(title) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  for (const item of response.data) {
    if (item.title === title) {
      return false;
    }
  }

  return true;
}

export async function loadTodoSamples() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

  const items = sampleSize(response.data, 20);

  return items.map(item => {
    return {
      title: item.title,
      deadline: new Date(),
      done: false,
      checked: false,
    };
  })
}

import { ref } from 'vue';

import useApi from './api';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export default async function () {
  const { response: users, request } = useApi<Application.User[]>(USERS_API_URL);
  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { users };
}

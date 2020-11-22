import { ref } from 'vue';

export default function<T> (url: RequestInfo, options?: RequestInit | undefined) {
  const response = ref();
  const request = async () => {
    const res = await fetch(url, options);
    const data: T = await res.json();

    response.value = data;
  };

  return {
    request,
    response,
  };
}

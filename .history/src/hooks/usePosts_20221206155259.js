import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function usePosts(limit) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const responce = await axios.get('http://localhost:3001/api/news');
      posts.value = responce.data;
    } catch (err) {
      alert('error');
    } finally {
      isPostLoading.value = false;
    }
  };
  onMounted(fetching);
  return { posts, isPostLoading, totalPage };
}

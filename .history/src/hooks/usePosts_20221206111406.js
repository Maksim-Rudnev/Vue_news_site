import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function usePosts(limit) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: 1,
          _limit: limit,
        },
      });
      totalPage.value = Math.ceil(responce.headers['x-total-count'] / limit);
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

// import axios from 'axios';
// import { ref, onMounted } from 'vue';

// export default function usePosts(limit) {
//   const posts = ref([]);
//   const totalPages = ref(0);
//   const isPostsLoading = ref(true);
//   const fetching = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
//         params: {
//           _page: 1,
//           _limit: limit,
//         },
//       });
//       totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
//       posts.value = response.data;
//     } catch (e) {
//       alert('Ошибка');
//     } finally {
//       isPostsLoading.value = false;
//     }
//   };

//   onMounted(fetching);

//   return {
//     posts, isPostsLoading, totalPages,
//   };
// }

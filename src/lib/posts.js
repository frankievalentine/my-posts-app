import { auth } from "./auth";

export async function getAllPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
  );
  // Don't have to map through records here as it is being handled in pages/api/posts
  const { posts } = await response.json();
  return posts;
}

export async function createPost(data) {
  const user = auth.currentUser();
  await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${user.token.access_token}`,
    },
  });
}

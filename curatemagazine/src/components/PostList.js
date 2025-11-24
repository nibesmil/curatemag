import PostCard from "./PostCard";

const today = new Date();
const formattedDate = today.toLocaleDateString("ko-KR");

function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} date={formattedDate} />
      ))}
    </section>
  );
}

export default PostList;

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="editor">작성자 · {post.editor}</p>
    </div>
  );
}

export default PostCard;

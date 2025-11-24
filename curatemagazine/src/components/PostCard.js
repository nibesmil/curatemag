function PostCard({ post, date }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p className="editor">작성자 · {post.editor}</p>
      <p className="date"> 작성일 · {date} </p>
    </div>
  );
}

export default PostCard;

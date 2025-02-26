import "./Comment.css";

function Comment({ comment, deleteComment }) {
  return (
    <div className="Comment">
      <p className="Comment__text">{comment.text}</p>
      <button
        className="Comment__delete-btn"
        onClick={() => deleteComment(comment.id)}
      >
        X
      </button>
    </div>
  );
}

export default Comment;
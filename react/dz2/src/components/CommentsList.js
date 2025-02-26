import { useState } from "react";
import Comment from "./Comment";
import "./CommentsList.css";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  function deleteComment(commentId) {
    setComments(comments.filter((comment) => comment.id !== commentId));
  }

  return (
    <div className="CommentsList">
      {comments.length ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
          />
        ))
      ) : (
        <p>Комментариев пока нет ...</p>
      )}
    </div>
  );
}

export default CommentsList;
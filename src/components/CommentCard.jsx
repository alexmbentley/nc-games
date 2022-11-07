import { useState } from 'react';
import { deleteComment } from './Api';

const CommentCard = ({ comment, user }) => {
  const [commentDeleted, setCommentDeleted] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.comment_id).then(({ data }) => {
      setCommentDeleted(true);
    });
  };

  if (user === comment.author) {
    return (
      <div className="commentCard">
        {commentDeleted ? (
          <div className="card my-3">
            <h4 className="my-3">Comment Deleted</h4>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-12 card m-2">
                  <div className=" mt-2 d-flex flex-start align-items-center">
                    <h5 className="fw-bold">{comment.author}</h5>
                    <div>
                      <p className="text-muted small mx-3 mb-0">
                        Posted on: {comment.created_at.substring(0, 10)}
                      </p>
                    </div>
                  </div>

                  <p className="text-start mt-3 mb-4 pb-2">{comment.body}</p>

                  <div className="small d-flex justify-content-start">
                    <button
                      className="btn btn-light mb-2"
                      onClick={(e) => {
                        handleDelete(e);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 card m-2">
            <div className=" mt-2 d-flex flex-start align-items-center">
              <h5 className="fw-bold">{comment.author}</h5>
              <div>
                <p className="text-muted small mx-3 mb-0">
                  Posted on: {comment.created_at.substring(0, 10)}
                </p>
              </div>
            </div>

            <p className="text-start mt-3 mb-4 pb-2">{comment.body}</p>

            <div className="small d-flex justify-content-start"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default CommentCard;

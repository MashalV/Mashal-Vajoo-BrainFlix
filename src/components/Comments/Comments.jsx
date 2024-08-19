import React from 'react'

function Comments({comments}) {
  return (
    <>
    <section>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment__avatar"></div>
            <div className="comment__wrapper">
              <div className="comment__wrapper--text">
                <div class="comment__wrapper--text--box box">
                  <h3 className="box__name">{comment.name}</h3>
                  <span className="box__date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className="comment__wrapper--details">{comment.comment}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Comments
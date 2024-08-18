import React from "react";
import "./VideoDetails.scss";

function VideoDetails({ video }) {
  const {
    id,
    title,
    channel,
    image,
    description,
    views,
    likes,
    timestamp,
    comments,
  } = video;

  console.log(video);

  return (
    <>
      <section>
        <h1 className="title">{title}</h1>
      </section>
      <section className="mainVid">
        <div className="mainVid__left">
          <h3 className="mainVid__left--channel">By {channel}</h3>
          <span className="mainVid__left--date">
            {new Date(timestamp).toLocaleDateString()}
          </span>
        </div>
        <div className="mainVid__right">
          <div className="mainVid__right--views">
            <img src="/src/assets/images/icons/views.svg" alt="eye icon" />
            <span>{views}</span>
          </div>
          <div className="mainVid__right--likes">
            <img src="/src/assets/images/icons/likes.svg" alt="eye icon" />
            <span>{likes}</span>
          </div>
        </div>
      </section>
      <section className="mainVid__description">
        <p>{description}</p>
      </section>
      <h3 className="counter"> {comments.length} Comments</h3>
      <section className="comments">
        <card className="card">
          <img
            className="card__image"
            src="/src/assets/images/Mohan-muruge.jpg"
            alt="picture of mohan"
          />
          <form className="card__wrapper">
            <label className="card__wrapper--comment">
              JOIN THE CONVERSATION
              <input
                className="card__wrapper--comment--in"
                type="text"
                name="comment"
                placeholder="Add a new comment"
                required
              />
            </label>
            <button className="card__wrapper--btn btn">
              <img
                className="btn__img"
                src="/src/assets/images/icons/add_comment.svg"
                alt="add comment icon"
              />
              <div className="btn__text">COMMENT</div>
            </button>
          </form>
        </card>
      </section>

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
  );
}

export default VideoDetails;

import "./Video.scss"; 


function Video({video}) {

    const { 
      image,
    } = video;
  return (
    <>
      <section className="player">
          <video className="player__video" poster={image} src={video} controls />
        </section>
    </>
  );
}

export default Video;

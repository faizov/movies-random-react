import netflixIcon from "../assets/netflix.png";
import shapeIcon from "../assets/shape.png";
import imbdIcon from "../assets/imbd.png";

export const Content = ({ data, images }) => {

  const linkYoutube = data.youtube_trailer_key ? "https://www.youtube.com/watch?v=" + data.youtube_trailer_key : null;
  console.log(`data`, data)
  
  return (
    <div className="content">
      <div className="content-poster">
        <div
          className="content-poster-img"
          style={{
            backgroundImage: `url(${images.poster})`
          }}
        ></div>
        <div className="content-poster-btn-watch">
          <a href="#">
            <div className="content-poster-btn-watch-text">
              <img
                className="content-poster-btn-icon"
                src={netflixIcon}
                alt="icon-services"
              />
              <p>Now Streaming Watch Now</p>
            </div>
          </a>
        </div>
        <a href="#">
          <button className="content-poster-btn-another">
            Another Suggestion
          </button>
        </a>
      </div>

      <div className="content-about">
        <h1 className="content-about-title">{data.title}</h1>

        <div className="content-about-details">
          {data.release_date && <span>{data.release_date}</span>}
          <span>Comedy, Crime</span>
          <span>{data.runtime}m</span>
          {linkYoutube && (
            <a href={linkYoutube} target="_blank" rel="noreferrer">
              <span className="play">
                <img src={shapeIcon} alt="play" />
                Play Trailer
              </span>
            </a>
          )}
        </div>

        <div className="content-about-imbdscore">
          <button>
            <img src={imbdIcon} alt="imbd" />
          </button>
          <h3>
            <span>{data.imdb_rating}</span>/10
          </h3>
        </div>
        <div className="content-about-overview">
          <h3>Overview</h3>
          <p>{data.description}</p>
        </div>

        <div className="content-about-director-writer">
          {data.directors && data.directors.map((item: string) => {
            return (
              <div className="content-about-director-writer-person" key={item}>
                <p>{item}</p>
                <p>Director, Writer</p>
              </div>
            )
          })}
        </div>

        {/* <hr />

         <div className="content-about-cast">
          <div className="content-about-cast-person">
            <img
              src="https://sun9-87.userapi.com/impg/zArwPgV4b6fMuK27C3qVdn5_fQte1g6qqhumKQ/2EyxVIPadgE.jpg?size=960x960&quality=96&sign=82edf7d3268e7e3c7ac998b4d59d252a&type=album"
              alt="person"
            />
            <p>Ali Atay</p>
            <p>Director, Writer</p>
          </div>
          <div className="content-about-cast-person">
            <img
              src="https://sun9-41.userapi.com/impg/Q8F0ZP1R1B5hrNcr4f7xj6WwT2ndCFUFs8zLGg/aD9tSS5Qccw.jpg?size=992x1293&quality=96&sign=4abbf99d07f4f2ea2bb7a49ba54a5439&type=album"
              alt="person"
            />
            <p>Aziz Kedi</p>
            <p>Writer</p>
          </div>
          <div className="content-about-cast-person">
            <img
              src="https://sun9-16.userapi.com/impg/0zOg75EboYsFFzImcn_bHI-fdTKJegDtkLM0Gw/wcuRcMoJY64.jpg?size=835x835&quality=96&sign=2f784a5224a8d110824cdadd4f1ae056&type=album"
              alt="person"
            />
            <p>Feyyaz Yiğit</p>
            <p>Writer</p>
          </div>
          <div className="content-about-cast-person">
            <img
              src="https://sun9-31.userapi.com/impg/c855724/v855724204/1ef2b0/GbrwrUtnfRE.jpg?size=1280x960&quality=96&sign=9e02e1ad0a1c1de8f30e99a47b28d4cc&type=album"
              alt="person"
            />
            <p>Feyyaz Yiğit</p>
            <p>Writer</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

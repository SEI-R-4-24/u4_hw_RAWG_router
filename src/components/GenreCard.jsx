const GenreCard = ({ genre }) => {
  return (
    <div key={genre.id} className="card">
      <div className="img-wrapper">
        <img src={genre.image_background} alt="img" />
      </div>
      <div className="info-wrapper flex-col">
        {genre.name}
        <br /># of Games: {genre.games_count}
      </div>
    </div>
  );
};

export default GenreCard;

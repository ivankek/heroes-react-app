import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

// import batman from "../../assets/dc-batman.jpg"; //estatico
// const heroImages = require.context("../../assets", true);

export const HeroScreen = () => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1, {
      replace: true,
    });
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  // const imagePath = `../assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          // src={imagePath} // desde public/assets
          // src={batman} //import
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8  animate__animated animate__fadeIn">
        <h3>{superhero}</h3>

        <ul className="list-group list-gropu-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

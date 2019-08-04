import React from 'react';
import PropTypes from 'prop-types';
import css from './SinglePet.module.css';

const SinglePet = ({ image, name, age, gender, color, breed, description }) => {
  return (
    <div>
      <h2 className={css.info}>About {name}</h2>
      <div className={css.info}>
        <img className={css.img} src={image} alt="pet" />
        <div>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
          <p>Color: {color}</p>
          <p>Breed: {breed}</p>
        </div>
      </div>
      <p className={css.info}>{description}</p>
    </div>
  );
};

SinglePet.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default SinglePet;

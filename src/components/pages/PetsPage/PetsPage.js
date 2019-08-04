import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initialPets from '../../../pets.json';
import css from './Pets.module.css';

export default class Pets extends Component {
  state = { pets: [] };

  componentDidMount() {
    this.setState({ pets: initialPets });
  }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <h2 className={css.h2}>Here is available pets for now</h2>
        <ul className={css.pets}>
          {pets.map(pet => (
            <li key={pet.id} className={css.pet}>
              <Link to={`/pets/${pet.id}`}>
                <div>
                  <img src={pet.image} alt="pet" />
                  <p> {pet.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SinglePet from '../../SinglePet/SinglePet';
import initialPets from '../../../pets.json';
import css from './PetPage.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: 'black',
  padding: '10px 50px 10px 50px',
  textDecoration: 'none',
};

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = { pet: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    const currentPet = initialPets.find(pet => pet.id === id);

    this.setState({ pet: currentPet });
  }

  render() {
    const { pet } = this.state;

    return (
      <div>
        <h2 className={css.h2}>
          <NavLink to="/pets" activeStyle={activeStyle}>
            Return
          </NavLink>
        </h2>
        {pet && <SinglePet {...pet} />}
      </div>
    );
  }
}

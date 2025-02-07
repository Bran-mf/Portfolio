import React from 'react';
import './UpsertRestaurant.scss';
import '../../../index.scss';
import CustomInput from '../../../common/CustomInput/CustomInput';
import { useParams } from 'react-router';
import CustomButton from '../../../common/CustomButton/CustomButton';

export const UpsertRestaurant = () => {
  const { id } = useParams();

  return (
    <div className="container upsert-restaurant">
      <div>
        <div className="restaurant__image"></div>
      </div>
      <div className="restaurant__form">
        <h1>{id === 'New' ? 'Create' : 'Edit'} Restaurant</h1>
        <CustomInput
          label="Name"
          placeholder="Name"
          name="name"
          type={'text'}
          value={''}
          onChange={() => {}}
        />
        <CustomInput
          label="Description"
          placeholder="Description"
          name="description"
          type={'text'}
          value={''}
          onChange={() => {}}
        />
        <CustomInput
          label="Address"
          placeholder="Address"
          name="address"
          type={'text'}
          value={''}
          onChange={() => {}}
        />
        <div className='form-row'>
          <CustomInput
            label="Phone"
            placeholder="Phone"
            name="phone"
            type={'text'}
            value={''}
            onChange={() => {}}
          />
          <CustomInput
            label="Availability"
            placeholder="10"
            name="availability"
            type={'number'}
            value={''}
            onChange={() => {}}
          />
        </div>

        <CustomButton text="Save" onClick={() => {}} type="cta" />
      </div>
    </div>
  );
};

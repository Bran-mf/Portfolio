import React from 'react';
import './UpsertRestaurant.scss';
import '../../../index.scss';
import CustomInput from '../../../common/CustomInput/CustomInput';
import { useParams } from 'react-router';
import CustomButton from '../../../common/CustomButton/CustomButton';
import ImageUploader from '../../../common/ImageUploader/ImageUploader';
import useForm from '../../../hooks/use-form';
import {
  upsertRestaurant_initialState,
  upsertRestaurant_validations,
} from './variables';
import { restrictNumbers } from '../../../util/helpers';

export const UpsertRestaurant = () => {
  const { id } = useParams();
  const { data, getFieldError, onChange, validate, handleSimpleOnChange,errors } =
    useForm(upsertRestaurant_initialState, upsertRestaurant_validations);

    console.log(errors, 'errors')

  return (
    <div className="container upsert-restaurant">
      <div>
        <ImageUploader />
      </div>
      <div className="restaurant__form">
        <h1>{id === 'New' ? 'Create' : 'Edit'} Restaurant</h1>
        <CustomInput
          label="Name"
          placeholder="Name"
          name="name"
          type={'text'}
          value={data.name}
          onBlur={() => validate('name')}
          onChange={handleSimpleOnChange}
          error={getFieldError('name')?.message}
        />
        <CustomInput
          label="Description"
          placeholder="Description"
          name="description"
          type={'text'}
          value={data.description}
          onBlur={() => validate('description')}
          onChange={handleSimpleOnChange}
          error={getFieldError('description')?.message}

        />
        <CustomInput
          label="Address"
          placeholder="Address"
          name="address"
          type={'text'}
          value={data.address}
          onChange={handleSimpleOnChange}
          onBlur={() => validate('address')}
          error={getFieldError('address')?.message}
        />
        <div className="form-row">
          <CustomInput
            label="Phone"
            placeholder="12345678"
            name="phone"
            type={'text'}
            value={data.phone}
            onKeyDown={restrictNumbers}
            onChange={handleSimpleOnChange}
            onBlur={() => validate('phone')}
            error={getFieldError('phone')?.message}
          />
          <CustomInput
            label="Availability"
            placeholder="10"
            name="availability"
            type={'number'}
            value={data.availability}
            onChange={handleSimpleOnChange}
            onBlur={() => validate('availability')}
            error={getFieldError('availability')?.message}
          />
        </div>

        <CustomButton text="Save" onClick={() => {}} type="cta" />
      </div>
    </div>
  );
};

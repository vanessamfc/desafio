import React, { useEffect } from 'react';
import { Select } from 'mui-rff';
import { FieldInputProps } from 'react-final-form';
import { MenuItem } from '@material-ui/core';
import { FieldContainer } from '../styles';

// Componente responsável por buscar apenas as sub-raças

const SubBreedField: React.FC<{
  input: FieldInputProps<any>;
  required: any;
  subBreedList: string[];
  breed: string;
}> = ({ input, required, subBreedList = [], breed }) => {
  useEffect(() => {
    input.onChange(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed]);
  if (subBreedList.length === 0) return <></>;
  return (
    <FieldContainer>
      <Select
        {...input}
        name="subBreed"
        label="Sub-raça"
        required={required.subBreed}
      >
        {subBreedList.map((subBreed: string) => (
          <MenuItem value={subBreed} key={subBreed}>
            {subBreed}
          </MenuItem>
        ))}
      </Select>
    </FieldContainer>
  );
};

export default SubBreedField;

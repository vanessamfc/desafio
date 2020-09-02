import React, { useEffect, useCallback, useState, useMemo } from "react";
import getBreeds from "../../../service/getBreeds";
import { Field } from "react-final-form";
import {
  InputLabel,
  Slider,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core/";
import { StyledSelect } from "./styles";
const Form: React.FC<{
  handleSubmit: () => void;
  values: any;
}> = ({ handleSubmit, values }) => {
  const [dogBreeds, setDogBreeds] = useState<string>();
  const [breedValue, setBreedValue] = useState<number | undefined>();
  useEffect(() => {
    console.log(breedValue);
  }, [breedValue]);
  const dogBreedList = useMemo(
    () => (dogBreeds ? Object.keys((dogBreeds as unknown) as object) : []),
    [dogBreeds]
  );

  const dogBreedValue = useMemo(
    () => (values?.breed?.toLocaleLowerCase().charCodeAt(1) - 96) * 100,
    [values]
  );
  const dogSexValue = useMemo(() => values?.sex, [values]);
  const dogAgeValue = useMemo(() => 1000 - values?.age * 60, [values]);
  const dogColorValue = useMemo(() => values?.color, [values]);

  useEffect(() => console.log(dogAgeValue), [dogAgeValue]);

  const getBreedsCallback = useCallback(async () => {
    const breed = await getBreeds();
    setDogBreeds(breed);
    console.log(breed);
  }, []);
  useEffect(() => {
    getBreedsCallback();
  }, [getBreedsCallback]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Raça</label>
        <Field name="breed">
          {({ input }) => (
            <FormControl {...input}>
              <InputLabel>Raças</InputLabel>
              <StyledSelect>
                {dogBreedList?.map((breed: string, index: number) => (
                  <MenuItem value={breed} key={breed} className="input-label">
                    {breed}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          )}
        </Field>

        {values.breed &&
        dogBreeds?.[values.breed] &&
        dogBreeds?.[values.breed].length > 0 ? (
          <>
            <label>Sub-raça</label>

            <Field name="subBreed" component="select">
              <option>Selecione a sub-raça</option>
              {(((dogBreeds?.[
                values.breed
              ] as unknown) as unknown) as string[]).map((subBreed: any) => (
                <option value={subBreed} key={subBreed} className="input-label">
                  {subBreed}
                </option>
              ))}
            </Field>
          </>
        ) : (
          <></>
        )}
        <label>Nome</label>
        <Field name="name" component="input">
          {({ input, meta }) => (
            <div>
              <label> Name</label>
              <input {...input} type="text" placeholder="First Name" />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          )}
        </Field>
        <label>Sexo</label>

        <Field name="sex">
          {({ input, meta }) => (
            <FormControl {...input} error={meta.error && meta.touched}>
              <InputLabel>Sexo</InputLabel>
              <StyledSelect>
                <MenuItem value={100}>Macho</MenuItem>
                <MenuItem value={200}>Fêmea</MenuItem>
              </StyledSelect>
              {meta.error && meta.touched && (
                <FormHelperText>{meta.error}</FormHelperText>
              )}
            </FormControl>
          )}
        </Field>

        <label>Idade</label>
        <Field name="age" component="input">
          {({ input, meta }) => (
            <Slider
              name="age"
              onChange={(e, v) => input.onChange(v)}
              defaultValue={7}
              min={1}
              max={15}
            />
          )}
        </Field>
        <label>Escolha a cor desejada</label>
        <Field name="color">
          {({ input, meta }) => (
            <FormControl {...input}>
              <InputLabel>Cor</InputLabel>
              <Select>
                <MenuItem value={30}>Branco</MenuItem>
                <MenuItem value={40}>Preto</MenuItem>
                <MenuItem value={20}>Amarelo</MenuItem>
              </Select>
              {meta.error && meta.touched ? (
                <FormHelperText>{meta.error}</FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
          )}
        </Field>

        <button type="submit">salvar</button>
        <span>{JSON.stringify(values)}</span>
      </div>
    </form>
  );
};

export default Form;

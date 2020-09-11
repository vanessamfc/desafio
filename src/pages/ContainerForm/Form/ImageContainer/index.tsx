import React, { useCallback, useState, useEffect } from 'react';
import { getImage, getSubBreedImage } from '../../../../service/getBreeds';
import paw from '../../../../assets/paw.png';
import { StyledContainer } from './styles';

// Componente responsável por buscar e renderizar a imagem do cachorro

const ImageContainer: React.FC<{
  input: any;
  breed: string;
  subBreed?: string;
}> = ({ input, breed, subBreed }) => {
  const [imageUrl, setImageUrl] = useState('');

  //Chamada a api para pegar a imagem do cachorro selecionado
  const getUrl = useCallback(async () => {
    setImageUrl('');
    const url = await (subBreed
      ? getSubBreedImage(breed, subBreed)
      : getImage(breed));

    setImageUrl(url);
    input.onChange(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breed, subBreed]);

  useEffect(() => {
    getUrl();
  }, [getUrl, breed, subBreed]);

  return (
    <>
      <input {...input} />
      {imageUrl ? (
        <StyledContainer style={{ width: '50px' }} src={imageUrl} alt="" />
      ) : (
        <StyledContainer style={{ width: '50px' }} src={paw} alt="" />
      )}
    </>
  );
};

export default ImageContainer;

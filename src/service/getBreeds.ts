import Axios from 'axios';

export async function getBreeds() {
  try {
    const {
      data: { message },
    } = await Axios.get('https://dog.ceo/api/breeds/list/all');
    return message;
  } catch (error) {
    return false;
  }
}
export async function getImage(breed: string) {
  try {
    const {
      data: { message },
    } = await Axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    return message;
  } catch (error) {
    return false;
  }
}
export async function getSubBreedImage(breed: string, sugbBreed: string) {
  try {
    const {
      data: {
        message: [subBreed],
      },
    } = await Axios.get(
      `https://dog.ceo/api/breed/${breed}/${sugbBreed}/images/random/1`
    );
    return subBreed;
  } catch (error) {
    return false;
  }
}

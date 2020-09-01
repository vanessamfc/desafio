import Axios from "axios";

export default async function getBreed() {
  try {
    const {
      data: { message },
    } = await Axios.get("https://dog.ceo/api/breeds/list/all");
    return message;
  } catch (error) {
    console.error("Sorry, an error occurred loading this page");
  }
}

import { requisitosList } from "../../src/requisitos";
export default async function handler(req, res) {
  res.status(200).json(requisitosList);
}

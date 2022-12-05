import { requisitosList } from "../../src/requisitosData";
export default async function handler(req, res) {
  res.status(200).json(requisitosList);
}

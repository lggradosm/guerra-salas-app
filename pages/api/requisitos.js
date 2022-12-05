import { requisitosList } from "../../dummy/requisitos";
export default function handler(req, res) {
  res.status(200).json(requisitosList);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../../../posts";

// type Data = {
//   name: string
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let id = req.query.id;

  let post = posts.find((p: any) => p.id == id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(400).json({ err: "There is no post " });
  }
}

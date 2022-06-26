// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [{ name: "Parbat" }, { name: "ram" }, { name: "hari" }, { name: "prashant" }, { name: "kamlesh" }];

export default function handler(req, res) {
  res.status(200).json({ data })
}

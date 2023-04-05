const products = [
  { id: 1, name: "Hero Ignitor" },
  { id: 2, name: "Hero Splinder" },
  { id: 3, name: "Pulser" },
  { id: 4, name: "Hero Hunk" },
  { id: 5, name: "Honda CBR" },
  { id: 6, name: "Yahama R15 V3" },
  { id: 7, name: "Apache 4V" },
  { id: 8, name: "KTM Duke" },
];

// console.log(products);
const getAllProduct = (req, res) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(products.slice(0, limit));
};

const getSingleProduct = (req, res) => {
  res.send("Find Single Product");
};

module.exports = { getAllProduct, getSingleProduct };

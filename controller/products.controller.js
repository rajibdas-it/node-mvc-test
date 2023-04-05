const getAllProduct = (req, res) => {
  res.send("All Products Found and Running From Controller page");
};

const getSingleProduct = (req, res) => {
  res.send("Find Single Product");
};

module.exports = { getAllProduct, getSingleProduct };

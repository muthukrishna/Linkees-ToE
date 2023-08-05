// /api/country.js

module.exports = (req, res) => {
    const countryCode = req.headers["x-vercel-id"];
    res.status(200).send(countryCode);
  };
  
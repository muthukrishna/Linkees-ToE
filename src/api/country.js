// /api/country.js

module.exports = (req, res) => {
    const countryCode = req.headers["x-vercel-ip-country"];
    res.status(200).send(countryCode);
  };
  
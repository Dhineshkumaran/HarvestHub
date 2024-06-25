const axios = require('axios');

exports.getCity = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    // Input validation (optional but recommended)
    if (!latitude || !longitude) {
      return res.status(400).send('Missing required parameters: latitude and longitude');
    }

    const apiKey = '3bf457a72550477e98a9dad1159578c1';
    const encodedLatitude = encodeURIComponent(latitude);
    const encodedLongitude = encodeURIComponent(longitude);
    const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${encodedLatitude},${encodedLongitude}&pretty=1&no_annotations=1`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.status.code === 200 && data.results && data.results.length > 0) {
      const firstResult = data.results[0];
      const components = firstResult.components || {};
      const city = components.city || 'City not found';
      const result = {'City':city};
      res.status(200).json(result);
    } else {
      const errorMessage = data.status.message || 'Location not found';
      res.status(404).send(errorMessage); // Use 404 for location not found
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal server error');
  }
};
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Linkee, CHANNEL_TYPES } from 'linkees';

import './css/normalize.css';

function BookLinks() {
  const [countryCode, setCountryCode] = useState('US');

  useEffect(() => {
    axios.get('/api/country')
      .then(response => {
        setCountryCode(response.data);
      })
      .catch(error => {
        console.error('Error fetching country code', error);
      });
  }, []);

  const amazonDomains: { [key: string]: string } = {
    'US': 'com/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'AU': 'com.au/Theory-Everyone-Here-Where-Going/dp/1399810634',
    'GB': 'co.uk/Theory-Everyone-Here-Where-Going/dp/1399810634',
    'DE': 'de/-/en/Michael-Muthukrishna/dp/026204837X',
    'CA': 'ca/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'BR': 'com.br/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'FR': 'fr/Theory-Everyone-Here-Where-Going/dp/1399810634',
    'IT': 'it/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'JP': 'jp/-/en/Michael-Muthukrishna/dp/1399810634',
    'MX': 'com.mx/Theory-Everyone-Where-Going-English-ebook/dp/B0C16V2GQS',
    'NL': 'nl/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'PL': 'pl/Theory-Everyone-Here-Where-Going/dp/1399810634',
    'SG': 'sg/Theory-Everyone-Here-Where-Going/dp/1399810634',
    'ES': 'es/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'AE': 'ae/Theory-Everyone-Science-Where-Going/dp/026204837X',
    'IN': 'in/Theory-Everyone-Here-Where-Going-ebook/dp/B0C16V2GQS',
    // Add more as needed
  };

  const localBookstoreDomains: { [key: string]: string } = {
    'US': 'com',
    'GB': 'co.uk',
    'DE': 'de',
    // Add more as needed
  };

  const publisherDomains: { [key: string]: string } = {
    'US': 'com',
    'GB': 'co.uk',
    'DE': 'de',
    // Add more as needed
  };

  const anotherBookstoreDomains: { [key: string]: string } = {
    'US': 'com',
    'GB': 'co.uk',
    'DE': 'de',
    // Add more as needed
  };

  const items = [
    {
      title: 'Amazon',
      subtitle: `Amazon ${countryCode}`,
      type: CHANNEL_TYPES.TELEGRAM,
      link: `https://www.amazon.${amazonDomains[countryCode] || 'com/Theory-Everyone-Science-Where-Going/dp/026204837X'}`,
    },
    {
      title: 'Local Bookstore',
      subtitle: 'Name of local book store',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `https://localbookstore.${localBookstoreDomains[countryCode] || 'com'}`,
    },
    {
      title: 'Publisher',
      subtitle: 'Name of publisher',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `https://publisher.${publisherDomains[countryCode] || 'com'}`,
    },
    {
      title: 'Another local bookstore',
      subtitle: 'Name of another local book store',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `https://anotherlocalbookstore.${anotherBookstoreDomains[countryCode] || 'com'}`,
    },
  ];

  return <Linkee cardItems={items} />;
}

ReactDOM.render(
  <React.StrictMode>
    <BookLinks />
  </React.StrictMode>,
  document.getElementById('root')
);

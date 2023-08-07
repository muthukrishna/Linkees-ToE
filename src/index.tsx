import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import { Linktree, CHANNEL_TYPES } from 'linkees';
import { CHANNEL_TYPES } from './packages/Linkees/src/constants';
import { Linkees } from './packages/Linkees/src/components/Linkees';

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

  const publisherDomains: { [key: string]: string } = {
    'US': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'AU': 'https://www.hachette.com.au/michael-muthukrishna/a-theory-of-everyone-who-we-are-how-we-got-here-and-where-we-re-going',
    'GB': 'https://basicbooks.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810661/',
    'DE': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    'CA': 'https://www.penguinrandomhouse.ca/books/730855/a-theory-of-everyone-by-michael-muthukrishna/9780262048378',
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
  
  const publisherName: { [key: string]: string } = {
    'US': 'MIT Press',
    'AU': 'Hachette',
    'GB': 'Basic Books',
    'DE': 'Hachette',
    'CA': 'Penguin Random House',
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
    'US': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
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

  const localBookstoreName: { [key: string]: string } = {
    'US': 'Penguin Random House',
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


  const anotherBookstoreDomains: { [key: string]: string } = {
    'US': 'https://bookshop.org/p/books/a-theory-of-everyone-the-new-science-of-who-we-are-how-we-got-here-and-where-we-re-going-michael-muthukrishna/19737285?ean=9780262048378',
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

  const anotherBookstoreName: { [key: string]: string } = {
    'US': 'Bookshop.org',
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

  

  const items = [
    {
      title: `Amazon ${countryCode}`,
      subtitle: `Amazon Pre-order Price Guarantee: the price you pay will be the lowest price offered between the time you pre-order and release`,
      type: CHANNEL_TYPES.AMAZON,
      link: `https://www.amazon.${amazonDomains[countryCode] || 'com/Theory-Everyone-Science-Where-Going/dp/026204837X'}`,
    },
    {
      title: `${publisherName[countryCode] || publisherName["GB"]}`,
      subtitle: '',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `${publisherDomains[countryCode] || publisherDomains["GB"]}`,
    },
    {
      title: `${localBookstoreName[countryCode]  || localBookstoreName["GB"]}`,
      subtitle: '',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `${localBookstoreDomains[countryCode] || localBookstoreDomains["GB"]}`,
    },
    {
      title: `${anotherBookstoreName[countryCode] || anotherBookstoreName["US"]}`,
      subtitle: '',
      type: CHANNEL_TYPES.LINKEDIN,
      link: `${anotherBookstoreDomains[countryCode] || anotherBookstoreDomains["US"]}`,
    },
  ];

  return <Linkees cardItems={items} name={''} />;
}

ReactDOM.render(
  <React.StrictMode>
    <BookLinks />
  </React.StrictMode>,
  document.getElementById('root')
);

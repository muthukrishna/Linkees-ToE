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
    'BR': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'FR': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'IT': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'JP': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'MX': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'NL': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'PL': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'SG': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'ES': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'AE': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'IN': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    // Add more as needed
  };
  
  const publisherName: { [key: string]: string } = {
    'US': 'MIT Press',
    'AU': 'Hachette',
    'GB': 'Basic Books',
    'DE': 'Hachette',
    'CA': 'Penguin Random House',
    'BR': 'Penguin Random House',
    'FR': 'Penguin Random House',
    'IT': 'Penguin Random House',
    'JP': 'Penguin Random House',
    'MX': 'Penguin Random House',
    'NL': 'Penguin Random House',
    'PL': 'Penguin Random House',
    'SG': 'Penguin Random House',
    'ES': 'Penguin Random House',
    'AE': 'Penguin Random House',
    'IN': 'Hachette',
    // Add more as needed
  };

  const localBookstoreDomains: { [key: string]: string } = {
    'US': 'https://www.penguinrandomhouse.com/books/730855/a-theory-of-everyone-by-michael-muthukrishna/',
    'AU': 'https://www.dymocks.com.au/book/a-theory-of-everyone-by-michael-muthukrishna-9781399810630',
    'DE': 'https://www.hugendubel.de/de/buch_gebunden/michael_muthukrishna-a_theory_of_everyone-45910061-produkt-details.html',
    'GB': 'https://www.waterstones.com/book/a-theory-of-everyone/michael-muthukrishna/9781399810630',
    'CA': 'https://www.archambault.ca/livres/a-theory-of-everyone-the-new-science-of-who-we-are-how-we-got-here-and-where-were-going/michael-muthukrishna/9780262048378/?id=4001965&cat=1884314',
    'BR': 'https://www.fnac.com/livre-numerique/a17967088/Michael-Muthukrishna-A-Theory-of-Everyone#omnsearchpos=1',
    'FR': 'https://www.furet.com/ebooks/a-theory-of-everyone-michael-muthukrishna-9781399810661_9781399810661_522.html',
    'IT': 'https://www.lafeltrinelli.it/audiolibri-inglese/autori/michael-muthukrishna',
    'JP': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    'MX': 'https://porrua.mx/a-theory-of-everyone-9781399810661.html',
    'NL': 'https://www.bookspot.nl/engelse-boeken/a-theory-of-everyone-9781399810647',
    'PL': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    'SG': 'https://singapore.kinokuniya.com/bw/9781399810630',
    'ES': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    'AE': 'https://www.hachette.co.uk/titles/michael-muthukrishna/a-theory-of-everyone/9781399810630/',
    'IN': 'https://www.kobo.com/in/en/ebook/a-theory-of-everyone-1',
    // Add more as needed
  };

  const localBookstoreName: { [key: string]: string } = {
    'US': 'Penguin Random House',
    'AU': 'Dymocks',
    'GB': 'Bookshop.org',
    'DE': 'Hugendubel',
    'CA': 'Archambault',
    'BR': 'Fnac',
    'FR': 'Furet du nord',
    'IT': 'Feltrinelli',
    'JP': 'Hachette',
    'MX': 'Porrúa',
    'NL': 'BookSpot.nl',
    'PL': 'Hachette',
    'SG': 'Kinokuniya Singapore',
    'ES': 'Hachette',
    'AE': 'Hachette',
    'IN': 'Rakuten Kobo',
    // Add more as needed
  };


  const anotherBookstoreDomains: { [key: string]: string } = {
    'US': 'https://bookshop.org/p/books/a-theory-of-everyone-the-new-science-of-who-we-are-how-we-got-here-and-where-we-re-going-michael-muthukrishna/19737285?ean=9780262048378',
    'AU': 'https://www.booktopia.com.au/a-theory-of-everyone-michael-muthukrishna/book/9781399810630.html',
    'GB': 'https://uk.bookshop.org/p/books/a-theory-of-everyone-who-we-are-how-we-got-here-and-where-we-re-going-michael-muthukrishna/7445899?ean=9781399810630',
    'DE': 'https://www.weltbild.de/artikel/buch/a-theory-of-everyone_41712680-1',
    'CA': 'https://www.chapters.indigo.ca/en-ca/books/a-theory-of-everyone-the/9780262048378-item.html?ikwid=muthukrishna&ikwsec=Home&ikwidx=0#algoliaQueryId=ad567c88ac68e9bd5771e588053843fa',
    'BR': 'https://www.livrariacultura.com.br/a-theory-of-everyone-892985215/p',
    'FR': 'https://www.fnac.com/livre-numerique/a17967088/Michael-Muthukrishna-A-Theory-of-Everyone#int=S:Suggestion%7CNonApplicable%7CNonApplicable%7C17967088%7CBL0%7CL1',
    'IT': 'https://books.mondadoristore.it/A-Theory-of-Everyone-Michael-Muthukrishna/eae978139981066/',
    'JP': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'MX': 'https://www.gandhi.com.mx/a-theory-of-everyone-1',
    'NL': 'https://www.bruna.nl/engelse-boeken/a-theory-of-everyone-9781399810647',
    'PL': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'SG': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'ES': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'AE': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    'IN': 'https://mitpress.mit.edu/9780262048378/a-theory-of-everyone/',
    // Add more as needed
  };

  const anotherBookstoreName: { [key: string]: string } = {
    'US': 'Bookshop.org',
    'AU': 'Booktopia',
    'GB': 'Waterstones',
    'DE': 'Weltbild',
    'CA': 'Chapters Indigo',
    'BR': 'Livraria Cultura',
    'FR': 'Fnac',
    'IT': 'Mondadori',
    'JP': 'MIT Press',
    'MX': 'Librerías Gandhi',
    'NL': 'Bruna',
    'PL': 'MIT Press',
    'SG': 'MIT Press',
    'ES': 'MIT Press',
    'AE': 'MIT Press',
    'IN': 'MIT Press',
    // Add more as needed
  };

  const PUBLISHER_BY_COUNTRY: { [key: string]: CHANNEL_TYPES } = {
    'US': CHANNEL_TYPES.MIT,
    'AU': CHANNEL_TYPES.HACHETTE,
    'GB': CHANNEL_TYPES.BASIC,
    'DE': CHANNEL_TYPES.HACHETTE,
    'CA': CHANNEL_TYPES.PENGUIN,
    'BR': CHANNEL_TYPES.PENGUIN,
    'FR': CHANNEL_TYPES.PENGUIN,
    'IT': CHANNEL_TYPES.PENGUIN,
    'JP': CHANNEL_TYPES.PENGUIN,
    'MX': CHANNEL_TYPES.PENGUIN,
    'NL': CHANNEL_TYPES.PENGUIN,
    'PL': CHANNEL_TYPES.PENGUIN,
    'SG': CHANNEL_TYPES.PENGUIN,
    'ES': CHANNEL_TYPES.PENGUIN,
    'AE': CHANNEL_TYPES.PENGUIN,
    'IN': CHANNEL_TYPES.HACHETTE,
    };

    const BOOKSTORE1_BY_COUNTRY: { [key: string]: CHANNEL_TYPES } = {
      'US': CHANNEL_TYPES.PENGUIN,
      'AU': CHANNEL_TYPES.AU1,
      'GB': CHANNEL_TYPES.GB1,
      'DE': CHANNEL_TYPES.DE1,
      'CA': CHANNEL_TYPES.CA1,
      'BR': CHANNEL_TYPES.BR1,
      'FR': CHANNEL_TYPES.FR1,
      'IT': CHANNEL_TYPES.IT1,
      'JP': CHANNEL_TYPES.HACHETTE,
      'MX': CHANNEL_TYPES.MX1,
      'NL': CHANNEL_TYPES.NL1,
      'PL': CHANNEL_TYPES.HACHETTE,
      'SG': CHANNEL_TYPES.SG1,
      'ES': CHANNEL_TYPES.HACHETTE,
      'AE': CHANNEL_TYPES.HACHETTE,
      'IN': CHANNEL_TYPES.IN1,
    };
    
    const BOOKSTORE2_BY_COUNTRY: { [key: string]: CHANNEL_TYPES } = {
      'US': CHANNEL_TYPES.MIT,
      'AU': CHANNEL_TYPES.AU2,
      'GB': CHANNEL_TYPES.GB2,
      'DE': CHANNEL_TYPES.DE2,
      'CA': CHANNEL_TYPES.CA2,
      'BR': CHANNEL_TYPES.BR2,
      'FR': CHANNEL_TYPES.FR2,
      'IT': CHANNEL_TYPES.IT2,
      'JP': CHANNEL_TYPES.MIT,
      'MX': CHANNEL_TYPES.MX2,
      'NL': CHANNEL_TYPES.NL2,
      'PL': CHANNEL_TYPES.MIT,
      'SG': CHANNEL_TYPES.MIT,
      'ES': CHANNEL_TYPES.MIT,
      'AE': CHANNEL_TYPES.MIT,
      'IN': CHANNEL_TYPES.MIT,
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
      type: PUBLISHER_BY_COUNTRY[countryCode] ?? PUBLISHER_BY_COUNTRY['US'],
      link: `${publisherDomains[countryCode] || publisherDomains["GB"]}`,
    },
    {
      title: `${localBookstoreName[countryCode]  || localBookstoreName["GB"]}`,
      subtitle: '',
      type: BOOKSTORE1_BY_COUNTRY[countryCode] ?? BOOKSTORE2_BY_COUNTRY['US'],
      link: `${localBookstoreDomains[countryCode] || localBookstoreDomains["GB"]}`,
    },
    {
      title: `${anotherBookstoreName[countryCode] || anotherBookstoreName["US"]}`,
      subtitle: '',
      type: BOOKSTORE2_BY_COUNTRY[countryCode] ?? BOOKSTORE2_BY_COUNTRY['US'],
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

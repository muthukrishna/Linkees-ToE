import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import { ItemType } from '../ts';
import { CHANNEL_TYPE_VS_COVER_IMAGE, BLURB_VS_COVER_IMAGE } from './constant';
import { CHANNEL_TYPES, BLURBS } from '../constants';

function Linkees({
  headerAvatar,
  cardItems,
  name,
}: {
  headerAvatar?: string;
  cardItems: ItemType[];
  name: string;
}): JSX.Element {
  // Convert the cover images to an array
  const imagesArray = Object.values(BLURB_VS_COVER_IMAGE);
  
  // Select a random image from the array
  const selectedImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];

  return (
    <div className="App">
      <Header avatar={headerAvatar} name={name} />
      <div className="container row">
        <a href="https://michael.muthukrishna.com/book" target="_blank" rel="noopener noreferrer">
          <div className="Card twelve columns" style={{ opacity: 1, transform: 'none' }}>
            <p class="blurb">
            Deftly wielding newly-honed ideas and insights unsheathed from the rapidly emerging science of cultural evolution, Muthukrishna confronts and analyzes some of the major challenges facing humanity, from rising energy costs and accelerating climate change to growing economic inequality and declining democracies. Rooted in a new theory of human nature, A Theory of Everyone flavorfully mixes a stunning breadth of scholarship with an impressive knowledge of pop-culture and current issues, boldly going where most social scientists fear to tread. Lucidly discussing ideas surrounding IQ, race, sex differences, inheritance taxes, religion, Microsoft and even monogamy, readers are treated to a fascinating intellectual flight that thoughtfully offers many new perspectives on old issues. Buckle up!
            <br/>
            - Joseph Henrich, Professor of Human Evolutionary Biology, Harvard University and author of The WEIRDest People in the World and The Secret of Our Success.
            </p>
          </div>
        </a>
      </div>
      <div className="container row">
        {cardItems.map((item, i: number) => {
          const coverImage: string =
            item.image ?? CHANNEL_TYPE_VS_COVER_IMAGE[item.type] ?? CHANNEL_TYPE_VS_COVER_IMAGE[CHANNEL_TYPES.WEBSITE];
          return <Card i={i} title={item.title} subtitle={item.subtitle} link={item.link} cover={coverImage} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export { Linkees };

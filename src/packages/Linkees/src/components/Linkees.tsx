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
            <img className="cover" src={selectedImage} alt="" />
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

import { CHANNEL_TYPE_VS_COVER_IMAGE } from './constant';
import { CHANNEL_TYPES } from '../constants';

// Define your array of images here
const images = [
  '../assets/amazon.png',
  '../assets/youtube.jpeg',
  '../assets/website.png',
  // ... more image paths
];

function Linkees({
  headerAvatar,
  cardItems,
  name,
}: {
  headerAvatar?: string;
  cardItems: ItemType[];
  name: string;
}): JSX.Element {
  // Select a random image from the array
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="App">
      <Header avatar={headerAvatar} name={name} />
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

import React, { useState } from 'react';
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

  const quotes = [
    {
      text: "A Theory of Everyone flavorfully mixes a stunning breadth of scholarship with an impressive knowledge of pop-culture and current issues, boldly going where most social scientists fear to tread. Lucidly discussing ideas surrounding IQ, race, sex differences, inheritance taxes, religion, Microsoft and even monogamy, readers are treated to a fascinating intellectual flight that thoughtfully offers many new perspectives on old issues. Buckle up!",
      author: "Joseph Henrich, Professor of Human Evolutionary Biology, Harvard University and author of The WEIRDest People in the World and The Secret of Our Success.",
    },
    {
      text: "Mind expanding – this book will change your view of the world forever. Michael Muthukrishna is one of our greatest and most creative thinkers.",
      author: "Matthew Syed, author of Black Box Thinking: The Surprising Truth about Success and Rebel Ideas: The Power of Diverse Thinking",
    },
    {
      text: "This hugely enjoyable book, stuffed with surprising facts, shows how we can turn the social sciences into real sciences. Michael Muthukrishna's new “theory of everyone” reveals alarming threats to humanity's future—but also shows that once we understand the science behind society, we do have the power to produce permanent systemic solutions.",
      author: "Ian Morris, Professor, Stanford Archaeology Center, Stanford University, author of Geography Is Destiny – Britain and the World: A 10,000-Year History",
    },
    {
      text: "A Theory of Everyone is a must read for anyone interested in understanding the forces that shape all of our lives. Full of scientific discoveries, revolutionary insights, and delightful storytelling, you will not only see the world differently, you'll have the tools to create a brighter future.",
      author: "Michele Gelfand, Professor, Stanford Graduate School of Business and author of Rule Makers, Rule Breakers: How Tight and Loose Cultures Wire Our World",
    },
    {
      text: "A big, bold and ambitious look at the world around us in which nothing is off limits. Wonderfully refreshing and thought-provoking.",
      author: "Peter Frankopan, Professor of Global History, Oxford University, author of The Silk Roads: A New History of the World",
    },
    {
      text: "There is a truly wonderful idea at the heart of this book: that by exchanging things and thoughts, human beings became capable of doing and knowing far more than their meagre brains would have otherwise made possible. It is not an entirely new idea, but Michael Muthukrishna explores its extraordinary and hopeful implications with rich and thrilling energy.",
      author: "Matt Ridley, author of The Evolution of Everything",
    },
    {
      text: "Muthukrishna has a heart as big as his intellect, which is saying something. In this original, fascinating, and provocative book he dives deep into who we humans are and what makes us tick. His hopeful message is that once we understand ourselves better we'll coexist better. Let's prove him right.",
      author: "Andrew McAfee, MIT Sloan School of Management, author of The Geek Way and coauthor of The Second Machine Age",
    },
    {
      text: "The best book I've read in a decade. A sprightly page-turner that entertains with specifics, astonishes with universals, and reframes the big issues facing humanity.",
      author: "Robert Klitgaard, author of Controlling Corruption and Tropical Gangsters",
    },
    {
      text: "Do you know your own species? You might think so, but Muthukrishna will make you think again. With clarity, humor, and energy, he opens new vistas on how genes and cultures shaped who we are and how we can improve our lives together. A Theory of Everyone is for everyone.",
      author: "Walter Sinnott-Armstrong, Chauncey Stillman Professor of Practical Ethics, Duke University, Author of Think Again: How to Reason and Argue",
    },
    {
      text: "This book, which I read with great fascination, shows how we can move beyond neoclassical economics with a firmer foundation in the natural sciences and energy. This is extremely important as the world soon, and Europe now, increasingly faces critical energy shortages. I hope this book helps more people understand the critical importance of energy in generating our current affluence, and its diminution as a probable root cause of future inflation. A failure to understand these relations is likely to cause our societies to become impossible to govern.",
      author: "Charles Hall, ESF Foundation Distinguished Professor at State University of New York, inventor of the EROI metric & author of Energy and the Wealth of Nations",
    },
    {
      text: "A Theory of Everyone is your guide to some of the most important advances in the social sciences, written by a foremost researcher, beautifully illustrated, and positively overflowing with cocktail-party worthy factoids.",
      author: "Erez Yoeli, Research Scientist and Director, Applied Cooperation Initiative, MIT, co-author of Hidden Games: The Surprising Power of Game Theory to Explain Irrational Human Behavior",
    },
    {
      text: "Michael brings the reader up to date on this powerful theoretical framework–including much of his own innovative work on corruption, cooperation, and collective intelligence–and thoughtfully discusses how this framework can be applied to address pressing societal issues, ranging from diversity to taxation to free speech.",
      author: "Moshe Hoffman, Visiting Lecturer on Economics, Harvard University;  co-author of Hidden Games: The Surprising Power of Game Theory to Explain Irrational Human Behavior",
    },
    {
      text: "A Theory of Everyone uses the latest social science research to answer the critical question of how all human communities can be made to work better.  Magisterial in scope and practical in application, this book should be required reading for CEOs, community organisers, Head Teachers, and Presidents.",
      author: "Jamie Heywood, CEO of zolar and former head of Uber, Northern & Eastern Europe",
    },
    {
      text: "I loved this book. A Theory of Everyone is a 'big book' bustling with 'big ideas', taking on some of humanity's most intractable issues — securing energy abundance, fostering innovation, increasing human cooperation between different groups, and figuring out how to leverage god-like technologies for good. The book lays out a path, along with various evidence-based strategies, for us humans to resolve these wicked problems so together we can create a more prosperous, abundant, and flourishing future. Required reading for anyone interested in the most important questions of our time.",
      author: "Kurtis Lockhart, Executive Director, Charter Cities Institute",
    },
  ];
  
  const [selectedQuote, setSelectedQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const handleQuoteClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuote(randomQuote);
  };

  return (
    <div className="App">
      <Header avatar={headerAvatar} name={name} />
      <div className="container top">
          <div className="Card twelve columns" style={{ opacity: 1, transform: 'none' }}>
            <p className="blurb">  
            “{selectedQuote.text}”
            <br/><br/>
            - {selectedQuote.author}
            </p>
          </div>
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

import { CHANNEL_TYPES } from '../constants';

export type ThemeType = 'dark' | 'light';

export type KnownChannelTypes =
  | typeof CHANNEL_TYPES.DRIBBLE
  | typeof CHANNEL_TYPES.GITHUB
  | typeof CHANNEL_TYPES.INSTAGRAM
  | typeof CHANNEL_TYPES.LINKEDIN
  | typeof CHANNEL_TYPES.TELEGRAM
  | typeof CHANNEL_TYPES.TWITTER
  | typeof CHANNEL_TYPES.WEBSITE
  | typeof CHANNEL_TYPES.AMAZON
  | typeof CHANNEL_TYPES.YOUTUBE
  | typeof CHANNEL_TYPES.MIT
  | typeof CHANNEL_TYPES.HACHETTE
  | typeof CHANNEL_TYPES.BASIC
  | typeof CHANNEL_TYPES.PENGUIN
  | typeof CHANNEL_TYPES.AU1
  | typeof CHANNEL_TYPES.GB1
  | typeof CHANNEL_TYPES.DE1
  | typeof CHANNEL_TYPES.CA1
  | typeof CHANNEL_TYPES.BR1
  | typeof CHANNEL_TYPES.FR1
  | typeof CHANNEL_TYPES.IT1
  | typeof CHANNEL_TYPES.MX1
  | typeof CHANNEL_TYPES.NL1
  | typeof CHANNEL_TYPES.SG1
  | typeof CHANNEL_TYPES.AU2
  | typeof CHANNEL_TYPES.GB2
  | typeof CHANNEL_TYPES.DE2
  | typeof CHANNEL_TYPES.CA2
  | typeof CHANNEL_TYPES.BR2
  | typeof CHANNEL_TYPES.FR2
  | typeof CHANNEL_TYPES.IT2
  | typeof CHANNEL_TYPES.MX2
  | typeof CHANNEL_TYPES.NL2
  | typeof CHANNEL_TYPES.IN1;


export type KnownChannelItem = {
  type: KnownChannelTypes;
  title: string;
  subtitle: string;
  image?: string;
  link: string;
};

export type UnknownChannelType = typeof CHANNEL_TYPES.OTHER;

export type UnknownChannelItem = {
  type: UnknownChannelType;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export type ItemType = KnownChannelItem | UnknownChannelItem;

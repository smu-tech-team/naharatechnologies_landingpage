declare interface RegularListProps {
  data: any[];
  renderItem: React.FC<any>;
  keyExtractor?: (number | string)[];
  [key: string]: any;
}

declare interface HowWeWorkCardProps {
  imageSetupType: string;
  title: string;
  text: string;
  values?: { id: number; title: string; text: string }[];
  imageWrapAnimProps?: any;
  containerAnimProps?: any;
  titleAnimProps?:any;
  descAnimProps?: any;
}

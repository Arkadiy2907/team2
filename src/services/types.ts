export interface IRootStateSearch {
  isSearch: {
    isSearch: boolean;
  };
}

export interface IActionisSearch {
  type: string;
  payload: boolean;
}

export interface ICards {
  id: string;
  title: string;
  date: string;
  src: string;
}

export interface ICardProps {
  image: ICards;
  onImageClick: (image: ICards) => void;
}

export interface IModalProps {
  open: boolean;
  image: ICards | null;
  onClose: () => void;
}

export interface ICardsProps {
  images: ICards[];
}

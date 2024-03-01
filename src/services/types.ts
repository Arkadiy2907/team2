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

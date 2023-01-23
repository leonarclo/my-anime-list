export type TTopAnimes = {
  mal_id: number;
  titles: [{ title: string }];
  images: { jpg: { image_url: string } };
  type: string;
  year: string;
  episodes?: string;
  score: string;
  rank: string;
  url: string;
};

export type TAnimeList = {
  mal_id: number;
  title: string;
  images: { jpg: { image_url: string } };
  type: string;
  year: string;
  episodes?: string;
  score: string;
  rank: string;
  url: string;
};

export type TData = {
  id: number;
  name: string;
  url: string;
};

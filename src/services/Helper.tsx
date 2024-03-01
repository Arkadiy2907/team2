export const minDate = '2015-01-01';

export const maxPic = 3;

export const getSrc = (d: string, id: string, key: string) => {
  const date = d.split('-').join('/');
  return `https://api.nasa.gov/EPIC/archive/enhanced/${date}/png/${id}.png?api_key=${key}`;
};

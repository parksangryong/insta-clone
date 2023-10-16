//actions
const PLUS_RESULT = 'changeImg';

//action creators
export const instaPlus = (imgs: number) => {
  return {
    type: PLUS_RESULT,
    imgs,
  };
};




export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (userId) => {
  return {
    type: LOGIN_USER,
    payload: userId,
  };
};


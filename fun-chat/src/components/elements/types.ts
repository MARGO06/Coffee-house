export type Users = {
  login: string;
  isLogined: boolean;
};

export type Active = {
  id: string;
  type: string;
  payload: {
    users: Users[];
  };
};

export type NewActive = {
  id: null;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
};

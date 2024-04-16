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

export type Message = {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
};

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

export type AllMessage = {
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

export type HistoryMessage = {
  id: string;
  type: 'MSG_FROM_USER';
  payload: {
    messages: AllMessage[];
  };
};

export type Options = {
  month: string;
  day: string;
  year: string;
  hour: string;
  minute: string;
  second: string;
};

export type deletedMessage = {
  id: string;
  type: 'MSG_DELETE';
  payload: {
    message: {
      id: string;
      status: {
        isDeleted: boolean;
      };
    };
  };
};

export const handleUserInfo = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.image = payload.image;
  state.freeCount = payload.freeCount;
  state.active_plan = payload.active_plan;
  state.payment_history = payload.payment_history;
};

export const handlerChangeEmail = (state, { payload }) => {
  state.email = payload;
};

export const handlerChangename = (state, { payload }) => {
  state.name = payload;
};

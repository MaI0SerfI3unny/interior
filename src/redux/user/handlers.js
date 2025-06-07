export const handleUserInfo = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.image = payload.image;
  state.freeCount = payload.freeCount;
  state.active_plan = payload.active_plan;
  state.payment_history = payload.payment_history;
  state.reg_type = payload.registration_type;
  state.payment_details = payload.payment_details;
};

export const handlerChangeEmail = (state, { payload }) => {
  state.email = payload;
};

export const handlerChangename = (state, { payload }) => {
  state.name = payload;
};

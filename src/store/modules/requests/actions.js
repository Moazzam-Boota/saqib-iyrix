export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: payload.coachId + 1,
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };

    console.log(newRequest);

    context.commit("addRequest", newRequest);
  },
};

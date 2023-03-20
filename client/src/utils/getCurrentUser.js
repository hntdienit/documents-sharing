const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};

export default getCurrentUser;

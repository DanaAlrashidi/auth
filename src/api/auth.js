import instance from ".";
const login = async (data) => {
  const res = await instance.post("/auth/register", data);
  return res;
};

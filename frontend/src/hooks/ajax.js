import axios from "axios";

const useAjax = (list) => {
  let api = "http://0.0.0.0:5004/backend/stores";

  const handleGet = async (action) => {
    try {
      let getList = await axios.get(api);
      let data = getList.data;
      action(data);
    } catch (e) {
      console.error(e);
    }
  };

  return [handleGet];
};

export default useAjax;

import api from "verification-config";

export default {
  name: "WalliD SDK Config",
  data() {
    return {
      data: null,
    };
  },
  created() {
    const token = localStorage.getItem("jwt");
    api
      .getData("https://example.com/api/endpoint", token)
      .then((response) => (this.data = response));
  },
};

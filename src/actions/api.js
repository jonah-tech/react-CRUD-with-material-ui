import axios from "axios";
const baseUrl = "http://localhost:43418/api/";

export default {
  dCandidate(url = baseUrl + "DCandidate/") {
    return {
      fetchAll: () => axios.get(url),
      fetchByid: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
}; 

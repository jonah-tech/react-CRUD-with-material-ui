import api from "./api";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FECTH_ALL: "FECTH_ALL",
};

/*export const fecthAll = () => dispatch => {
  api.dCandidate().fetchAll()
      .then(response => {
      dispatch({
        type: ACTION_TYPES.FECTH_ALL,
        payload: response.data
      })
    })
    .cacth(err => console.log(err))
};*/

export const fecthAll = () => {
    return (dispatch) => {
       api.dCandidate().fetchAll()
        .then(response => {
            console.log(response)
            dispatch({
                type: ACTION_TYPES.FECTH_ALL,
                payload : response.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
}
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

const formatData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

//get all action

export const fecthAll = () => {
  return (dispatch) => {
    api
      .dCandidate()
      .fetchAll()
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.FECTH_ALL,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//create action
export const create = (data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dCandidate()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });

      onSuccess();
    })
    .catch((err) => console.log(err));
};

// update action

export const update = (id, data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dCandidate()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

// delete action
export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .dCandidate()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

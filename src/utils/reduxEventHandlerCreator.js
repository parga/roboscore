import * as scoresActions from "../actions/scores";

/**
 * This is an agnostic function that, taking advantage of function composition, takes as first parameter the redux dispatcher, and returns another function which will be the real handler, this handler creator takes 2 params, the `reduxActionCreator` name and the arguments to be spread to that action creator
 * @function
 * @param {ReduxDispatcher} dispatch
 * @returns {Function} - a handler creator that takes 2 params `reduxActionCreatorName` and the arguments to be spread to that `reduxActionCreator`
 */
export const reduxEventHandlerCreator = (dispatch) => (
  reduxActionCreatorName,
  handlerArguments
) => {
  return () => {
    dispatch(
      scoresActions[reduxActionCreatorName](
        ...handlerArguments.map((arg) => arg.value)
      )
    );
  };
};

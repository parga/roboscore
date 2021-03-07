import React, { createElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { parseSchema } from "../../utils/parseSchema";
import { reduxEventHandlerCreator } from "../../utils/reduxEventHandlerCreator";
// import { createElementString } from "../../utils/crateElementString";
import * as scoresActions from "../../actions/scores";
import * as components from "../../components";

/**
 * This component is on charge of render the result of the schema parser, the result is a tree of react components, this is defined by the `createElement` param definition, in this component you can use some other type of element creator, I provide a createElementString as an example
 * @returns {React.Element}
 */
export const SchemaRenderer = () => {
  const { state, uiSchema } = useSelector(({ scores, uiSchema }) => ({
    state: scores,
    uiSchema,
  }));
  const dispatch = useDispatch();
  return (
    <>
      {parseSchema({
        createElement,
        uiSchema,
        state,
        components,
        scoresActions,
        eventHandlerCreator: reduxEventHandlerCreator(dispatch),
      })}
    </>
  );
};

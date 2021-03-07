const renderPeople = ({
  createElement,
  uiSchema,
  state,
  components,
  eventHandlerCreator,
}) =>
  createElement(
    components[uiSchema.component],
    { key: uiSchema.id },
    parseSchema({
      createElement,
      uiSchema: uiSchema.children,
      state,
      components,
      eventHandlerCreator,
    })
  );

const renderPerson = ({
  createElement,
  uiSchema,
  state,
  components,
  eventHandlerCreator,
}) =>
  createElement(components[uiSchema.component], {
    key: uiSchema.id,
    ...parseProperties(uiSchema.properties, state, eventHandlerCreator),
  });

const parseProperties = (properties, state, eventHandlerCreator) => {
  const parsedProperties = {};
  for (const [key, { type, value, arguments: args }] of Object.entries(
    properties
  )) {
    if (type === "function") {
      parsedProperties[key] = eventHandlerCreator(value, args);
    } else if (type === "stateReference") {
      parsedProperties[key] = state[value][key];
    } else {
      parsedProperties[key] = value;
    }
  }
  return parsedProperties;
};

// const parseArguments = (arguments) => {

// }

const parseMap = {
  People: renderPeople,
  Person: renderPerson,
};

/**
 * defines the API to set the functions that will create your DOM tree, also you define the state for state referenece inside the dom and the eventHandlerCreator
 * @function
 * @param {...object} params
 * @param {ElementCreator} params.createElement - Function on charge of parse each node of the schema and create an output
 * @param {UISchema} params.uiSchema - Schema use to define the UI
 * @param {State} params.state - Application state
 * @param {Array<ReactElement>} params.components - Array of available components to render
 * @param {EventHandlerCreator} params.eventHandlerCreator - Function on charge of create the event handlers based on the schema
 */
export const parseSchema = ({
  createElement,
  uiSchema,
  state,
  components,
  eventHandlerCreator,
}) =>
  uiSchema.map((element) =>
    parseMap[element.component]({
      createElement,
      uiSchema: element,
      state,
      components,
      eventHandlerCreator,
    })
  );

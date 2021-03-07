import React from "react";
import { Image, View, Text, Button } from "@adobe/react-spectrum";
import { defineMessages, FormattedMessage } from "react-intl";

/**
 * Component on charge of render the individual person
 * @param {Object} params
 * @param {String} params.avatar
 * @param {String} params.firstName
 * @param {String} params.lastName
 * @param {string} params.age
 * @param {function} params.onClick
 */
export const Person = ({ avatar, firstName, lastName, age, onClick }) => {
  const messages = defineMessages({
    age: {
      id: "app.age",
      defaultMessage: "He is {age} years old",
      description: "defines the age of the individual",
    },
    button: {
      id: "app.incrementScore.button",
      defaultMessage: "Increment Score",
    },
  });
  return (
    <View
      width="size-4600"
      // backgroundColor="static-white"
      aria-label="Alignment"
    >
      <Text>
        {firstName} {lastName}
        <FormattedMessage {...messages.age} values={{ age }} />
      </Text>
      <Text></Text>
      <Image src={avatar} alt="avatar" />
      <Button onPress={onClick}>
        <FormattedMessage {...messages.button} />
      </Button>
    </View>
  );
};

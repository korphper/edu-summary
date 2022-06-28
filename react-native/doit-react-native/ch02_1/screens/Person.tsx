import React, {FC} from 'react';
import {Text} from 'react-native';
import {IPerson} from '../data';

export type PersonProps = {
  person: IPerson;
};

export const Person: FC<PersonProps> = ({person}) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
};

export default Person;

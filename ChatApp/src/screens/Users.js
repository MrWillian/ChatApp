import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UsersList from '../components/UsersList';

const Users = ( props ) => {
  return (
    <SafeAreaView>
      <UsersList {...props} />
    </SafeAreaView>
  );
};

Users.navigationOptions = {
  title: 'Contatos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="globe" size={18} color="#999" />
  )
};

export default Users;

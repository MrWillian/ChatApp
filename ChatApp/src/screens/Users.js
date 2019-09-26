import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import UsersList from '../components/UsersList';
//import Icon from 'react-native-vector-icons/FontAwesome';

const Users = ( props ) => {
  return (
    <SafeAreaView>
      <StatusBar 
        backgroundColor='#800090'
        animated={true} />
      <UsersList {...props} />
    </SafeAreaView>
  );
};

Users.navigationOptions = {
  title: 'Contatos',
  // tabBarIcon: ({ tintColor }) => (
  //   <Icon name="globe" size={18} color="#999" />
  // )
};

export default Users;

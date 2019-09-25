import React from 'react';
import { FlatList } from 'react-native';
import UserItem from './UserItem';

const data = [
  {
    id: '1',
    name: 'Willian 1',
    cellNumber: '(77) 9 9999-9999',
    avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4'
  },
  {
    id: '2',
    name: 'Willian 2',
    cellNumber: '(77) 9 9999-9999',
    avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v= = ('
  },
  {
    id: '3',
    name: 'Willian 3',
    cellNumber: '(77) 9 9999-9999',
    avatar: 'https://avatars1.githubusercontent.com/u/50757994?s=400&u=22af9ae506a22875fde4e49d771fd4b13b02fd48&v=4'
  }
];

const UsersList = ( props ) => {
  return (
    <FlatList 
      data={data}
      renderItem={({ item }) => 
        <UserItem 
          id={item.id}
          name={item.name} 
          avatar={item.avatar} 
          cellNumber={item.cellNumber}
          {...props.navigation} />
      }
      keyExtractor={item => item.id} />
  );
};

export default UsersList;

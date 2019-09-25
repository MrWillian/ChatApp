import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}

Main.navigationOptions = {
  title: 'Conversas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={18} color="#999" />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;

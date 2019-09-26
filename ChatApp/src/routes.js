import Main from './screens/Main';
import Users from './screens/Users';
import Conversation from './screens/Conversation';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        Tabs: createMaterialTopTabNavigator({
            Main,
            Users,
        },
        {
            tabBarOptions: {
                style: {
                    backgroundColor: '#800090',
                },
                activeTintColor: '#000',
                inactiveTintColor: '#FFF',
                showIcon: true 
            },
        }),
        Conversation: { screen: Conversation },
    },
    {
        initialRouteName: "Tabs",
        headerMode: "none"
    }),
);

export default Routes;

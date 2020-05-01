import React from 'react';
import { View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class MessagesScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems:'center', marginTop:'7%' }}>
                <Text> You Don't have any messages</Text>
            </View>
        );
    }
}


MessagesScreen.navigationOptions = {
    tabBarIcon: <AntDesign name="message1" size={25}/>

}

export default MessagesScreen;
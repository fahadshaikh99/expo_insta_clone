import React from 'react';
import { View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class IconComment extends React.Component {
    render() {
        return(
            <View>
                <FontAwesome name="commenting-o" size={28} color="#575757"/>
            </View>
        );
    }
}

export default IconComment;
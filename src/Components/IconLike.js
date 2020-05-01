import React from 'react';
import { View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


class IconLike extends React.Component {
    render() {
        return(
            <View>
                <FontAwesome name="heart" size={28}  color="#f76868"/>
            </View>
        );
    }
}

export default IconLike;
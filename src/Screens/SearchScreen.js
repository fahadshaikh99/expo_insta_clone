import React from 'react';
import { View, Text} from 'react-native';
import SearchBar from '../Components/SearchBar';
import { FontAwesome } from '@expo/vector-icons';

class SearchScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor: 'white', marginTop:'7%'}}>
                <SearchBar
                    placeholder="Search Messages"
                />
                <View style={{ marginTop: '30%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Search People</Text>
                </View>
            </View>
        );
    }
}

SearchScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="search" size={32}  />

}

export default SearchScreen;
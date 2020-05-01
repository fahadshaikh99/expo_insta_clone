import React from  'react';
import { View, Image, ActivityIndicator} from 'react-native';
import { database } from '../../config/config';


// This Component will fetch users Avatar when you pass userId as a argument to this function

class FetchImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: ''
        }
         this.fetchUserInfo(this.props.objectUrl);   
    }
    
// it will fetch user Avatar according to user UserId
fetchUserInfo = (userId) => {
        var that = this;
        
        database.ref('users').child(userId).child('avatar').once('value').then(function(snapshot) {
            const exists = (snapshot.val()!== null);
            if(exists) data = snapshot.val();
                that.setState({ avatar: data});
               // console.log(that.state.avatar)
        }).catch(error => console.log(error));
}



    render() {
        
        return(
            <View>
                { this.state.avatar == '' ?  (
                  <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center'}}><ActivityIndicator size="large" color="green" /></View>
                ) : (
                <Image
                    source={{ uri: this.state.avatar }}
                    style={{marginLeft: 10, height: 50, width: 50, borderRadius: 25}}
                />
                )}
            </View>
        );
    }
}

export default FetchImage;
import React,{Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class UserScreen extends Component {
    render() {
        return(
            <Text style={styles.text}>UserScreen</Text>
        )
    }
}
const styles = StyleSheet.create({
    text:{
     flex:1,
     fontSize:30,
     fontWeight:'bold',
     marginTop:100
    }
})

import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Alert} from 'react-native';
import FirebaseApp from '../firebase/firebase';
import { TextInput } from 'react-native-gesture-handler';
const database = FirebaseApp.database();
const {width, height} = Dimensions.get('window');

export default class AppTodo extends React.Component{
    constructor(props){
        super(props);
        this.itemRef = database;
        this.state = {
            text:'',
        }
    }
    add(){
        this.itemRef.ref('AppTodo/List').push({
            list: this.state.text
        });
        this.setState({text:''},() => {Alert.alert('Up')})
    }

    render(){
        return(
            <View style = {{flex:1, flexDirection:'column', backgroundColor:'white'}}>
                <View style = {{flex:0.1, backgroundColor:'blue', justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{fontWeight:'bold',color:'white', fontSize: width/20}} >App Todo List</Text>
                </View>
                <View style = {{flex:0.1, flexDirection:'row'}}>
                    <View style = {{flex:0.7, justifyContent:'center',alignItems:'center'}}>
                        <TextInput style = {{ paddingLeft:10, width: width * 0.7 - 10 ,flex:1 , margin:10, borderColor:'blue', borderRadius:10, borderWidth:1, fontSize: width/25, color:'black' }} placeholder = "What will you do?" onChangeText = {(text) => this.setState({text})} value = {this.state.text}/>
                    </View>
                    <View style = {{flex:0.3}}>
                        <TouchableOpacity style = {{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'blue', borderRadius:10, margin:10}} onPress = {()=> this.add()}>
                            <Text style={{color:'white', fontSize: width/25}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
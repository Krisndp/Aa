import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Alert, FlatList, Image } from 'react-native';
import FirebaseApp from '../firebase/firebase';
import { TextInput } from 'react-native-gesture-handler';
const database = FirebaseApp.database();
const { width, height } = Dimensions.get('window');


class TodoList extends React.Component {

    render() {
        return (
            <View style={{ margin: 10, alignItems: 'stretch', borderColor: 'grey', borderRadius: 5, borderWidth: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.8 }}>
                    <Text style={{ margin: 10, fontSize: 18, color: 'black' }}>
                        {this.props.item.event}
                    </Text>
                </View>
                <View style={{ flex: 0.2, flexDirection: 'row' }}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => {}}>
                            <Image source={{ uri: "https://img.icons8.com/material-sharp/2x/edit.png" }} style={{ width: width / 20, height: width / 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={this.props.remove}>
                            <Image source={{ uri: "https://img.icons8.com/metro/26/000000/trash.png" }} style={{ width: width / 20, height: width / 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

class Modal extends React.Component {

    render() {
        <View style={{ flex: 1 }}>
            <View>
                <TextInput />
            </View>
            <View>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>

    }
}

export default class AppTodo extends React.Component {
    constructor(props) {
        super(props);
        this.itemRef = database;
        this.state = {
            text: '',
        }
    }

    componentWillMount() {
        this.allItems(this.itemRef);
    }

    add() {
        this.itemRef.ref('AppTodo/List').push({
            list: this.state.text
        });
        this.setState({ text: '' }, () => { this.allItems(this.itemRef), Alert.alert('Add success!') })
    }
    allItems(itemRef) {
        console.log("Haha");
        var item = [];
        itemRef.ref('AppTodo/List').on('child_added', (data) => {
            console.log("Hehe");
            item.push({
                key: data.key,
                event: data.val().list,
            });
            this.setState({ item }),
                console.log(item)
        })
    }
    remove(x){
        Alert.alert(
            'Delete it now.',
            'Are you sure?',
            [
                { text:'OK', onPress: () => {[
                    this.itemRef.ref('AppTodo/List').child(x).remove(),
                    this.allItems(this.itemRef)
                    ]}
                },
                { text: 'Cancel', onPress: () => {}}

            ]
        )
       
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
                <View style={{ flex: 0.1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: width / 20 }} >App Todo List</Text>
                </View>
                <View style={{ flex: 0.1, flexDirection: 'row' }}>
                    <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ paddingLeft: 10, width: width * 0.7 - 10, flex: 1, margin: 10, borderColor: 'blue', borderRadius: 10, borderWidth: 1, fontSize: width / 25, color: 'black' }} placeholder="What will you do?" onChangeText={(text) => this.setState({ text })} value={this.state.text} />
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 10, margin: 10 }} onPress={() => this.add()}>
                            <Text style={{ color: 'white', fontSize: width / 25 }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.8 }}>
                    <FlatList
                        data={this.state.item}
                        renderItem={({ item }) => <TodoList remove = {() => this.remove(item.key)} item={item} />}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            </View>
        )
    }
}
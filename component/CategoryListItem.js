import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function CategoryListItem(props) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flexDirection: 'column', borderRadius:20, margin:10 }}>
           <TouchableOpacity style={{flex:1}} onPress={props.onPress}>
            <Text style={{ fontSize: width / 20, color: 'black', margin:5 }}>{props.category.name}</Text>
            <View style={{marginBottom:5}}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD" }} style={{ width: width / 4, height: height / 6 }} />
            </View>
            </TouchableOpacity>
        </View>
    );
}

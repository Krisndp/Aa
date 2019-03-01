import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function ProductListItem(props) {
    return (
        <View style={{marginBottom:10, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View>
                <Image source={{ uri: props.product.image[0].url }} style={{ width: width / 2 - 20, height: width / 2 + 20 }} />
                <View style={{ flexDirection: 'column', marginTop:5 }}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: width / 25, color: 'red' }}>{props.product.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop:5 }}>
                        <View style={{flex:1, alignItems:'flex-start', marginLeft:5}}>
                            <Text style={{ fontSize: width / 30, color: 'black' }}>{props.product.price}</Text>
                        </View>

                        <View style={{flex:1, alignItems:'flex-end', marginRight:5}}>
                            <Text style={{ fontSize: width / 30, color: 'black' }}>MUA +</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
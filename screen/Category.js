import React from 'react';
import {View, FlatList} from 'react-native';
import ProductListItem from '../component/ProductListItem';

export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                // {id: 1, name: 'Abc', price: 500, image:[{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD"}]},
                // {id: 2, name: 'Abc', price: 500, image:[{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD"}]},
                // {id: 3, name: 'Abc', price: 500, image:[{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD"}]},
                // {id: 4, name: 'Abc', price: 500, image:[{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD"}]},
                // {id: 5, name: 'Abc', price: 500, image:[{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvD5mjvS6b_RwxVXpGpQVNbFkwFwHrt57J082WKOLO7xS10WXD"}]},

            ]
        }
    }


    render(){
        return(
            <View style={{flex:1, paddingHorizontal:8, paddingTop:10, paddingBottom:10}}>
                <FlatList
                data={this.state.products}
                renderItem={({item}) => <ProductListItem product={item} />}
                keyExtractor={(item) => `${item.id}`}
                numColumns={2}
                />
            </View>
        )
    }
}
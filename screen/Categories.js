import React from 'react';
import { View, FlatList } from 'react-native';
import CategoryListItem from '../component/CategoryListItem';
import axios from 'axios';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // categories: [
            //     // { id: 1, name: 'Coco' },
            //     // { id: 2, name: 'Coco1' },
            //     // { id: 3, name: 'Coco2' },
            //     // { id: 4, name: 'Coco3' },
            //     // { id: 5, name: 'Coco3' },
            //     // { id: 6, name: 'Coco3' },
            // ]
        }

    }

    componentDidMount(){
        // axios.get('http://localhost:3000/categories')
        // .then( res => {console.log(res)})
        // .catch(error=> console.error(error));
        this.APIcall();
    }

    APIcall() {
        axios({
            method: 'get',
            url: 'http://demo2241206.mockable.io/categories',
            // data: null,
            // headers: {
            //     "X-Sapo-SessionId": "77f71b9c905ea73ddad74e511607321f"
            // },
            // params: {
            //     query: this.state.text
            // }
        })
            .then(response => {
                const categories = response.data.categories;
                this.setState({ categories });
                console.log(categories);
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state;
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', padding: 20 }}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <CategoryListItem onPress={() => navigation.navigate('Category',{ Name: item.name})} category={item} />}
                    keyExtractor={(item) => `${ item.id }`}
                />
            </View>
        );
    }

}
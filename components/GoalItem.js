import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
class GoalItem extends Component {
    render() {
        return (
            <View >
                
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.props.works}
                    renderItem={
                        itemData => (
                            <TouchableOpacity onPress = {()=>this.props.delete(itemData.item.id)}>
                            <Text style={styles.list}>
                                {itemData.item.value}
                            </Text>
                            </TouchableOpacity>
                        )
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list : {
        display:"flex",
        margin: 5,
        textAlign: "center",
        borderColor:'black',
        borderWidth: 2,
        margin: 5,
        padding: 5,
        backgroundColor: '#b2ebf2'

    
    }
})
export default GoalItem;
import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ name, productImg, price, selected, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, selected && styles.cardSelected]}>
                <Image source={{ uri: productImg }} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    cardSelected: {
        backgroundColor: '#e0f7fa',
        borderColor: '#00796b',
        borderWidth: 2,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    info: {
        marginLeft: 16,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        color: 'gray',
    }
})
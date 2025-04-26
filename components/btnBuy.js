import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BtnBuy({ onPress }) {
    return (
        <TouchableOpacity style={styles.btnBuy} onPress={onPress}>
            <Text style={styles.btnBuyText}>Comprar</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btnBuy: {
        backgroundColor: '#00796b',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        width: '30%',
    },
    btnBuyText: {
        color: '#fff',
        fontSize: 16,
    },
});
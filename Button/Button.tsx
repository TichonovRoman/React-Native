import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableOpacityProps } from 'react-native';

type iButtonPropsType = {
    variant?: 'default' | 'error' | 'primary'
}

export const IButton = ({variant, ...restProps}: iButtonPropsType & TouchableOpacityProps) => {

    let finalColor = '';
    if (variant === 'error') {finalColor = 'red'};
    if (variant === 'primary') {finalColor = 'blue'};
    if (variant === 'default') {finalColor = 'green'};

    return (
        <>
         <TouchableOpacity 
         {...restProps} 
         style={[styles.button, {backgroundColor: finalColor}]} 
         activeOpacity={0.4}>
            <Text style={styles.buttonText}>
                Button
            </Text>
        </TouchableOpacity>   
        </>
    );
    
};

const styles = StyleSheet.create({
       button: {
        marginTop: 6,
        width: 90, 
        height: 40, 
        backgroundColor: 'green', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10
       },
       buttonText: {
        color: 'white',
        fontSize: 24
       }
  });
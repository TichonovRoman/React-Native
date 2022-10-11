import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TouchableOpacityProps } from 'react-native';

type ColorsVariantType = 'default' | 'error' | 'primary' | 'secondary'

type iButtonPropsType = {
    title: string
    variant?: ColorsVariantType
}

const colors: {[key in ColorsVariantType]: string} = {
    default: 'green',
    error: 'red',
    primary: 'blue',
    secondary: 'black'
}

export const IButton = ({title, variant = 'default', ...restProps}: iButtonPropsType & TouchableOpacityProps) => {

    // let finalColor = '';
    // if (variant === 'error') {finalColor = 'red'};
    // if (variant === 'primary') {finalColor = 'blue'};
    // if (variant === 'default') {finalColor = 'green'};

    return (
        <>
         <TouchableOpacity 
         style={[styles.button, {backgroundColor: colors[variant]}]} 
         activeOpacity={0.4}
         {...restProps} 
         >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>   
        </>
    );
    
};

const styles = StyleSheet.create({
       button: {
        marginTop: 6,
        width: 160, 
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
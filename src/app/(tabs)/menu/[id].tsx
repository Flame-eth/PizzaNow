import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Product = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
        color: 'blue'
      
      }}>Product Test</Text>
      <Text style={{
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
      
      }}>Product ID: {id}</Text>
    </View>
  )
}

export default Product
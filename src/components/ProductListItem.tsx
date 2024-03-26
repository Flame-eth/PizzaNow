import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { FC } from 'react';
import { ProductType } from '@/types';


interface ProductListItemProps {
    product: ProductType;
}
const ProductListItem: FC<ProductListItemProps> = ({
    product
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text style={styles.title}> {product.name} </Text>
      <Text style={styles.price}>
        ${product.price}
      </Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
   
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: "black",
    padding: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
   width: "100%",
   aspectRatio: 1,
  }
});

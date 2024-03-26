import { Image, StyleSheet } from "react-native";

import { Text, View } from "@components/Themed";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </View>
  );
}

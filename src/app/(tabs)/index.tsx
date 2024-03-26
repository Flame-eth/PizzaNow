import { FlatList, Image, StyleSheet } from "react-native";

import { Text, View } from "@components/Themed";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {/* {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))} */}
      <FlatList data={products} 
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{ gap: 10}}
        keyExtractor={(item) => item.id.toString()} 
       />
    </View>
  );
}

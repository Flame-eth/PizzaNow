import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { ProductType } from "@/types";
import products from "@assets/data/products";
import Colors from "@/constants/Colors";
import Button from "@components/Button";

const sizes: string[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = React.useState<string>("M");

  const product: ProductType | undefined = products.find(
    (product) => product.id.toString() === id
  );

  const addToCart = () => {
    console.warn("Added to cart, size: ", selectedSize);

  }
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: product?.name,
        }}
      />
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable 
          onPress={() => setSelectedSize(size)}
          style={[styles.size, {
            backgroundColor: selectedSize === size ? "gainsboro" : "white"
          }]} key={size}>
            <Text style={[styles.sizeText, {
              color: selectedSize === size ? "black" : "gray"
            }]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to Cart" onPress={addToCart} />

    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "black",
    padding: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    // color: Colors.light.tint,
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "auto"
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

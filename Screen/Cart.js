// Cart.js

const Cart = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Image source={item.image} />
      <Text>Added to Cart</Text>
      <Text>{cartItem.quantity} x {item.name}</Text>
      <Text>Total Price: ${item.quantity * item.price}</Text>
      {/* Add additional information as needed */}
    </View>
  );
};
export default Cart;
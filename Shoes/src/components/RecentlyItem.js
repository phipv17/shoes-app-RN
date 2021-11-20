import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, SIZES} from '../constants';

const RecentlyItem = props => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={styles.imgItemRecently}
        />
      </View>
      <View style={styles.productWrapper}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentlyItem;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgItemRecently: {
    width: 90,
    height: 100,
  },

  productWrapper: {
    flex: 1.5,
    marginLeft: SIZES.medium,
  },

  price: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
  },

  name: {
    color: COLORS.gray,
    fontSize: SIZES.h3,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/index';

const TrendingItem = props => {
  const {item, onItemClick, index} = props;

  var trendingStyle = {};
  if (index === 0) {
    trendingStyle = {marginLeft: SIZES.padding};
  } else {
    trendingStyle = {};
  }
  return (
    <TouchableOpacity
      style={[styles.name, {...trendingStyle}]}
      onPress={onItemClick}>
      <Text style={{color: COLORS.gray}}>{item.type}</Text>
      <View style={styles.contentWrapper(item)}>
        <View style={styles.textItemTrending}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>

      <Image source={item.img} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  );
};

export default TrendingItem;

const styles = StyleSheet.create({
  name: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
  },
  textItemTrending: {
    justifyContent: 'space-between',
    height: '35%',
  },
  contentWrapper: item => ({
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: item.bgColor,
    marginTop: 10,
    borderRadius: 15,
    marginRight: SIZES.padding,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    paddingBottom: SIZES.radius,
  }),

  image: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{rotate: '-16deg'}],
  },

  productName: {
    color: COLORS.white,
  },

  productPrice: {
    marginBottom: SIZES.base,
    color: COLORS.white,
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {SIZES} from '../constants';

const DetailModal = props => {
  const {
    onBackdropPress,
    isVisible,
    selectedItem,
    onSizeItemClick,
    onAddToCardClick,
  } = props;
  return (
    <Modal onBackdropPress={onBackdropPress} isVisible={isVisible}>
      <View style={styles.container(selectedItem)}>
        <Image source={selectedItem.img} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.name}>{selectedItem.name}</Text>
          <Text style={styles.type}>{selectedItem.type}</Text>
          <Text style={styles.price}>{selectedItem.price}</Text>
          <View style={styles.selectSizeContainer}>
            <Text style={styles.type}>Select size</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}>
              {selectedItem.sizes.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onSizeItemClick(item)}
                    key={index}
                    style={
                      selectedItem.checked === item
                        ? {
                            ...styles.sizeContainer,
                            borderColor: 'black',
                          }
                        : styles.sizeContainer
                    }>
                    <Text
                      style={
                        selectedItem.checked === item
                          ? {
                              ...styles.sizeText,
                              color: 'black',
                            }
                          : styles.sizeText
                      }>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addBtn(selectedItem)}
          onPress={onAddToCardClick}>
          <Text style={styles.name}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  container: selectedItem => ({
    backgroundColor: selectedItem.bgColor,
    minHeight: SIZES.height * 0.6,
    borderRadius: 10,
  }),

  image: {
    width: '96%',
    height: 140,
    transform: [{rotate: '-20deg'}, {translateY: -25}],
    alignSelf: 'center',
  },

  detailContainer: {
    padding: 16,
  },

  name: {
    color: 'white',
    fontSize: 20,
    opacity: 0.9,
    lineHeight: 24,
  },
  type: {
    color: 'white',
    fontSize: 16,
    opacity: 0.7,
    lineHeight: 24,
    marginTop: 10,
  },

  price: {
    color: 'white',
    fontSize: 30,
    marginTop: 16,
  },

  selectSizeContainer: {
    flexDirection: 'row',
  },

  scrollContainer: {
    marginLeft: 16,
  },

  sizeContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    minWidth: 40,
  },
  sizeText: {
    color: 'white',
    fontSize: 16,
  },

  addBtn: selectedItem => ({
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'green',
    flex: 1,
  }),
});

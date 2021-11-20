/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {images, SIZES} from '../constants/index';
import TrendingItem from '../components/TrendingItem';
import RecentlyItem from '../components/RecentlyItem';
import DetailModal from '../components/DetailModal';
import {TRENDING, RECENTLY} from '../constants/Data';

const Home = () => {
  const [isShowAddToBagModal, setShowAddToBagModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const renderTrending = (item, index) => {
    return (
      <TrendingItem
        item={item}
        onItemClick={() => onTrendingItemClick(item)}
        index={index}
      />
    );
  };

  const onTrendingItemClick = item => {
    setSelectedItem({...item, checked: item.sizes[0]});
    setShowAddToBagModal(true);
  };

  const renderRecently = item => {
    return <RecentlyItem item={item} />;
  };

  const listFooter = () => {
    return <View style={{width: 50, height: 50}}></View>;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Trending</Text>
        <View style={styles.trendingContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={TRENDING}
            renderItem={({item, index}) => renderTrending(item, index)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View style={styles.recentlyContainer}>
        <View style={{width: 70, marginLeft: SIZES.base}}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RECENTLY}
          renderItem={({item}) => renderRecently(item)}
          keyExtractor={item => item.id}
          ListFooterComponent={listFooter}
        />
      </View>

      {selectedItem && (
        <DetailModal
          onBackdropPress={() => setShowAddToBagModal(false)}
          isVisible={isShowAddToBagModal}
          selectedItem={selectedItem}
          onSizeItemClick={item =>
            setSelectedItem({...selectedItem, checked: item})
          }
          onAddToCardClick={() => setShowAddToBagModal(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

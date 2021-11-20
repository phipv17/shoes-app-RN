import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.medium,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
  trendingContainer: {
    height: 260,
    marginTop: SIZES.base,
  },

  recentlyContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.7,
    // shadowRadius: 10.32,
    // elevation: 16,
  },

  baseModalLabelStyle: {},

  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;

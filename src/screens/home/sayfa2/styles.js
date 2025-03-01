import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  menu: {
    tintColor: '#ffff',
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    marginLeft: 10,
    marginTop: 30,
  },
  middle: {
    backgroundColor: '#ffff',
    width: '100%',
    height: 700,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  middlepos: {
    marginTop: 110,
    alignItems: 'center',
  },
  signinfopos: {
    marginTop: 25,
    marginLeft: 45,
  },
});

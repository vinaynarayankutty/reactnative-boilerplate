import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  safeAreaView1: {backgroundColor: '#FFF', flex: 0},
  safeAreaView2: {flex: 1, backgroundColor: '#FFF'},
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  text: {fontSize: 18, color: '#808080', fontWeight: 'bold'},
});

export default Styles;

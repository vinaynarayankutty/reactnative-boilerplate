import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataUser} from '../../stores/actions/UserActions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.users);

  const ListUser = () => {
    return user.map(data => {
      return (
        <View key={data.id} style={styles.userContainer}>
          <Text style={{fontSize: 15}}>
            {data.id}. {data.name}
          </Text>
        </View>
      );
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <View style={styles.outerWrapper}>
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchDataUser())}>
              <Text style={styles.text}>Click here to show User data</Text>
            </TouchableOpacity>
            <ListUser />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

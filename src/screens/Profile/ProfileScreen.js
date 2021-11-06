import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Styles';
// import Icon from 'react-native-vector-icons/Ionicons'

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <View style={styles.outerWrapper}>
          {/* <Icon name={'ios-settings'} size={100} color={'green'} /> */}
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert('this is Profile Screen')}
              style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is{' '}
                <Text style={{fontWeight: 'bold', color: 'green'}}>
                  {' '}
                  PROFILE{' '}
                </Text>{' '}
                screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;

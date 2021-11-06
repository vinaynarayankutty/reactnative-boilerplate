import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import styles from './Styles';

const ProfileScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.safeAreaView1} />
      <SafeAreaView style={styles.safeAreaView2}>
        <View style={styles.outerWrapper}>
          <Text style={styles.text}>
            This is{' '}
            <Text style={{fontWeight: 'bold', color: 'green'}}> PROFILE </Text>{' '}
            screen
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;

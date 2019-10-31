/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { ScratchCard } from "@thalesness/react-native-canvas-scratch-card";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Text style={styles.sectionTitle}>{'React Native Canvas Scratch Card Demo'}</Text>
        <View style={{height: 450}}>
          <ScratchCard strokeWidth={40} fillColor={"#FFFF00"} bgImage={{
            filename: "mbag.jpg",
            directory: "",
          }} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    height: 500,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    padding: 25,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

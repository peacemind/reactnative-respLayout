import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

import { scale, scaleFactor, verticalScale } from './scaleSize';

export default class App extends React.Component {
  render() {
    return (
      //this is based on the flex layout system and scale the font size to fit different
      //screen size
      <View style={styles.container}>
        <View style={styles.top} >
          <Text style={styles.text}>This is top menu</Text>
        </View>

        <View style={styles.center} >
            <Text style={styles.centerText}>This is content of application</Text>

          <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>One</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Two</Text>
                </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom} >
          <Text style={styles.text}>This is footer of application</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: 24
      }
    })
  },
  top: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '60%',
    backgroundColor: '#7fbcac',
  },
  bottom: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1',
  },
  centerText: {
    fontSize: scaleFactor(14),
    color: 'black',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    width: scaleFactor(150, 0.3),
    height: scaleFactor(45, 0.3),
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#41B6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: scaleFactor(14),
    color: 'white'
  }
});

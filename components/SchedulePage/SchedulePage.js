import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import styles from './Stylesheet';
import commonStyles from '../../common/CommonStyleSheet';
import { scale } from 'react-native-size-matters';

class SchedulePage extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: 'SCHEDULE SESSION',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: 'transparent',
        borderBottomColor:'transparent',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: '800',
        fontSize: 12,
        letterSpacing: 3,
        color: '#7a7a7a',
      }
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.journey}>
            <View style={{alignItems: 'center', justifyContent:'center', width: 60, zIndex: 2}}>
              <View style={{backgroundColor: 'white'}}>
                <Material name="radio-button-checked" size={17} color={'#00b16e'} />
              </View>
              <Text style={[commonStyles.boldText, {fontSize: 10, color: '#00b16e', marginTop: 5, letterSpacing: 1}]}>SCHEDULE</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent:'center', width: 60, marginLeft: scale(50), marginRight: scale(50), zIndex: 2}}>
              <View style={{backgroundColor: 'white'}}>
                <Material name="radio-button-unchecked" size={17} color={'#cdccd8'} />
              </View>
              <Text style={[commonStyles.boldText, {fontSize: 10, color: '#cdccd8', marginTop: 5, letterSpacing: 1}]}>REVIEW</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent:'center', width: 60, zIndex: 2}}>
              <View style={{backgroundColor: 'white'}}>
                <Material name="radio-button-unchecked" size={17} color={'#cdccd8'} />
              </View>
              <Text style={[commonStyles.boldText, {fontSize: 10, color: '#cdccd8', marginTop: 5, letterSpacing: 1}]}>DONE</Text>
            </View>
            <View style={{position: 'absolute', left:85, top:7, zIndex: 0, flexDirection:'row', }}>
              <View style={[styles.hr, {backgroundColor: '#00b16e'}]}></View>
              <View style={[styles.hr, {marginLeft: 15}]}></View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default SchedulePage;
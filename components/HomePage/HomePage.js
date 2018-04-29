import React, { Component } from 'react';
import Material from 'react-native-vector-icons/MaterialIcons';
import { 
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import styles from './Stylesheet';

export default class HomePage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      lessonObj: [
        {
          id: 1,
          subject: 'Bahasa Inggris',
          type: 'PRIVATE',
          teacherName: 'Christian Ing',
          date: 'Tuesday, 27 April 2018',
          timeStart: '09.00',
          timeEnd: '10.30',
        },
        {
          id: 2,
          subject: 'Bahasa Inggris',
          type: 'PRIVATE',
          teacherName: 'Christian Ing',
          date: 'Tuesday, 27 April 2018',
          timeStart: '09.00',
          timeEnd: '10.30',
        },
        {
          id: 3,
          subject: 'Bahasa Inggris',
          type: 'PRIVATE',
          teacherName: 'Christian Ing',
          date: 'Tuesday, 27 April 2018',
          timeStart: '09.00',
          timeEnd: '10.30',
        }
      ]
    };
  }

  render() {
    const lessonItems = this.state.lessonObj.map(lesson => (
      <View key={lesson.id} style={[styles.lessonWrapper]}>
        <View style={styles.cardView}>
          <View style={styles.cardLeft}>
            <Text style={[styles.boldText, styles.subjectName]}>{lesson.subject}</Text>
            <Text style={[styles.boldText, styles.teacherName]}>with {lesson.teacherName}</Text>
            <View style={styles.badgeWrapper}>
              <Text style={[styles.lessonType]}>{lesson.type}</Text>
            </View>
            <View style={styles.timeWrapper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Material name="date-range" size={20} color={'#00b16e'} /> 
                <Text style={[styles.fontLato, styles.greenTime]}>Tuesday, 27 April 2018</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Material name="access-time" size={20} color={'#00b16e'} /> 
                <Text style={[styles.fontLato, styles.greenTime]}>{lesson.timeStart} - {lesson.timeEnd}</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardRight}>
            <Image
              style={styles.roundedImg}
              source={require('../../assets/images/starwars-me.jpg')}
              borderRadius={25}
              resizeMode="contain"
            />
            <TouchableOpacity>
              <Material name="more-vert" size={25} color={'#d6d6d6'} 
                onPress={() => {
                  console.log('heello')
                }} 
              /> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ));

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.scheduleWrapper}>
            <View style={styles.textWrapper}>
              <Text style={[styles.boldText, styles.upcomingText]}>ENROLLED LESSONS</Text>
              <View style={styles.badge}>
                <Text style={[styles.lightText, styles.rightText]}>2</Text>
              </View>
            </View>
            { lessonItems }
          </View>
        </ScrollView>
      </View>
    );
  }
}
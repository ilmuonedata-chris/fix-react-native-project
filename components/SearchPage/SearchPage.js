import React, { Component } from 'react';
import { Icon, Text, Input, Item, Button } from 'native-base';
import Material from 'react-native-vector-icons/MaterialIcons';
import { 
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import commonStyles from '../../common/CommonStyleSheet';
import styles from './Stylesheet';

export default class SearchPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      lessonObj: [
        {
          id: 1,
          name: 'Matematika',
        },
        {
          id: 2,
          name: 'Bahasa Inggris',
        },
        {
          id: 3,
          name: 'C++',
        },
        {
          id: 4,
          name: 'Programming',
        },
        {
          id: 5,
          name: 'France',
        },
        {
          id: 6,
          name: 'Language',
        },
        {
          id: 7,
          name: 'Japanese',
        },
        {
          id: 8,
          name: 'Guitar',
        },
        {
          id: 9,
          name: 'Drums',
        },
        {
          id: 10,
          name: 'React Native',
        },
      ]
    }
  }

  render() {
    const lessonItems = this.state.lessonObj.map(lesson => (
      <Button key={lesson.id} rounded style={styles.buttonLesson}>
        <Text style={[commonStyles.fontLato, {color: '#00b16e'}]}>{lesson.name}</Text>
      </Button>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={[commonStyles.boldText, styles.topText]}>What are your</Text>
          <Text style={[commonStyles.boldText, styles.topText]}>interests?</Text>
        </View>

        <Item rounded>
          <Icon name="ios-search" />
          <Input style={styles.searchBar} placeholder="Filter lessons" />
        </Item>

        <View style={styles.lessonWrapper}>
          { lessonItems }
        </View>

        <View style={styles.buttonWrapper}>
          <Button rounded style={styles.discoverBtn}>
            <Text style={styles.discoverText}>Discover</Text>
          </Button>
        </View>
      </View>
    );
  }
}
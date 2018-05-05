import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Button, Icon } from 'native-base';
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

export default class DiscoverPage extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'DISCOVER',
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
        <View style={styles.topHeader}>
          <Button iconRight rounded transparent style={{borderWidth: 1, borderColor: '#828282'}}>
            <Text style={[commonStyles.fontLato, {fontSize: 12, color:'#828282'}]}>Edit Filter</Text>
            <Icon type="MaterialIcons" name='filter-list' style={{fontSize: 15, color: '#828282'}} />
          </Button>
        </View>
        <ScrollView style={styles.scrollView}>
          <Card style={styles.cardBorder}>
            <View style={styles.cardBodyWrapper}>
              <Image
                style={styles.roundedImg}
                source={require('../../assets/images/starwars-me.jpg')}
                resizeMode="contain"
              />
              <View style={styles.rightCard}>
                <Text style={[commonStyles.boldText, styles.cardTeacher]}>Katarina von McPherson</Text>
                <View style={styles.cardReview}>
                  <Text style={styles.starRating}>
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star-border" size={15} color={'#fec63d'} />
                  </Text>
                  <Text style={[commonStyles.boldText, styles.font12]}>{' '}5.0</Text>
                  <Text style={[commonStyles.boldText, styles.font12]}>{'    '}30</Text>
                  <Text style={[commonStyles.boldText, styles.fontColorGray]}>{'  '}reviews</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Material name="location-on" size={15} color={'#000'} />
                  <Text style={[commonStyles.boldText, styles.cardLocation]}>{'    '}Tanah Abang, Jakarta Pusat</Text>
                </View>
              </View>
            </View>
            <View style={[styles.bodyCard]}>
              <View style={styles.cardLessons}>
                <Button rounded style={styles.roundedButton}>
                  <Text style={[commonStyles.boldText, styles.lessonText]}>Matematika</Text>
                </Button>
                <Button rounded style={styles.roundedButton}>
                  <Text style={[commonStyles.boldText, styles.lessonText]}>Programming</Text>
                </Button>
              </View>
              <Text style={[commonStyles.boldText, styles.cardDescription]}>
                Math is simply my subject of choice, mainly because I like to solve computing problems. Other than that, Math is more than just remembering formulas, it also teaches us how to solve problems efficiently...
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerCol}>
                <Text>
                  <Text style={[commonStyles.boldText, styles.currency]}>IDR {' '}</Text>
                  <Text style={[commonStyles.boldText, styles.price]}>145k{'  '}</Text>
                  <Text style={[commonStyles.lightText, styles.additional]}>/ lesson</Text>
                </Text>
                <Button rounded style={{backgroundColor: '#00b16e', height: 30}}>
                  <Text style={[commonStyles.boldText, {color: 'white', height: 15, fontSize: 12}]}>Select</Text>
                </Button>
              </View>
            </View>
          </Card>
          <Card style={styles.cardBorder}>
            <View style={styles.cardBodyWrapper}>
              <Image
                style={styles.roundedImg}
                source={require('../../assets/images/starwars-me.jpg')}
                resizeMode="contain"
              />
              <View style={styles.rightCard}>
                <Text style={[commonStyles.boldText, styles.cardTeacher]}>Katarina von McPherson</Text>
                <View style={styles.cardReview}>
                  <Text style={styles.starRating}>
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star" size={15} color={'#fec63d'} />
                    <Material name="star-border" size={15} color={'#fec63d'} />
                  </Text>
                  <Text style={[commonStyles.boldText, styles.font12]}>{' '}5.0</Text>
                  <Text style={[commonStyles.boldText, styles.font12]}>{'    '}30</Text>
                  <Text style={[commonStyles.boldText, styles.fontColorGray]}>{'  '}reviews</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Material name="location-on" size={15} color={'#000'} />
                  <Text style={[commonStyles.boldText, styles.cardLocation]}>{'    '}Tanah Abang, Jakarta Pusat</Text>
                </View>
              </View>
            </View>
            <View style={[styles.bodyCard]}>
              <View style={styles.cardLessons}>
                <Button rounded style={styles.roundedButton}>
                  <Text style={[commonStyles.boldText, styles.lessonText]}>Matematika</Text>
                </Button>
                <Button rounded style={styles.roundedButton}>
                  <Text style={[commonStyles.boldText, styles.lessonText]}>Programming</Text>
                </Button>
              </View>
              <Text style={[commonStyles.boldText, styles.cardDescription]}>
                Math is simply my subject of choice, mainly because I like to solve computing problems. Other than that, Math is more than just remembering formulas, it also teaches us how to solve problems efficiently...
              </Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerCol}>
                <Text>
                  <Text style={[commonStyles.boldText, styles.currency]}>IDR {' '}</Text>
                  <Text style={[commonStyles.boldText, styles.price]}>145k{'  '}</Text>
                  <Text style={[commonStyles.lightText, styles.additional]}>/ lesson</Text>
                </Text>
                <Button rounded style={{backgroundColor: '#00b16e', height: 30}}>
                  <Text style={[commonStyles.boldText, {color: 'white', height: 15, fontSize: 12}]}>Select</Text>
                </Button>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}
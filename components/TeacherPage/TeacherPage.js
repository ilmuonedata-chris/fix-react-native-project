import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Material from 'react-native-vector-icons/MaterialIcons';
import styles from './Stylesheet'
import commonStyles from '../../common/CommonStyleSheet'

export class TeacherPage extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: 'PROFILE',
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
        <View style={[styles.teacherProfile]}>
          <Image
            style={styles.roundedImg}
            source={require('../../assets/images/starwars-me.jpg')}
            resizeMode="contain"
          />
          <Text style={[commonStyles.boldText, styles.teacherName]}>Katarina Elvis</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Material name="location-on" size={15} color={'#000'} />
            <Text style={[commonStyles.lightText, styles.teacherLocation]}>{'  '}Tanah Abang, Jakarta Pusat</Text>
          </View>
          <View style={styles.teacherReview}>
            <View style={{flexDirection: 'row'}}>
              <Material name="star" size={15} color={'#fec63d'} />
              <Material name="star" size={15} color={'#fec63d'} />
              <Material name="star" size={15} color={'#fec63d'} />
              <Material name="star" size={15} color={'#fec63d'} />
              <Material name="star-border" size={15} color={'#fec63d'} />
            </View>
            <Text style={[commonStyles.boldText, {fontSize: 12}]}>{' '}5.0</Text>
          </View>
        </View>

        <View style={styles.teacherStats}>
          <View style={styles.statsWrapper}>
            <TouchableOpacity style={[styles.statsCol, {paddingLeft: 35}]}>
              <Text style={[commonStyles.boldText, styles.statsNum]}>20</Text>
              <Text style={[commonStyles.lightText, {letterSpacing: 1}]}>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.statsCol, styles.middleCol]}>
              <Text style={[commonStyles.boldText, styles.statsNum]}>27</Text>
              <Text style={[commonStyles.lightText, {letterSpacing: 1}]}>Students</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.statsCol, {paddingRight: 35}]}>
              <Text style={[commonStyles.boldText, styles.statsNum]}>107</Text>
              <Text style={[commonStyles.lightText, {letterSpacing: 1}]}>Lessons</Text>
            </TouchableOpacity>
          </View>
        </View> 
        
        <ScrollView style={styles.scrollView}>
          <View style={[styles.teacherDetails, {borderTopWidth: 0}]}>
            <Text style={[commonStyles.boldText, styles.header]}>About</Text>
            <Text style={[commonStyles.lightText, {fontSize: 14}]}>Math is simply my subject of choice, mainly because I like to solve computing problems. Other than that, Math is more than just remembering formulas, it also teaches us how to solve problems efficiently</Text>
          </View>

          <View style={styles.teacherDetails}>
            <Text style={[commonStyles.boldText, styles.header]}>Teaches</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.roundedBtn}>
                <Text style={[commonStyles.boldText, styles.btnText]}>Matematika</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedBtn}>
                <Text style={[commonStyles.boldText, styles.btnText]}>Programming</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.teacherDetails}>
            <Text style={[commonStyles.boldText, styles.header]}>Experiences</Text>
            <View style={[styles.experience]}>
              <View><Material name="school" size={17} color={'#00b16e'} /></View>
              <View style={{marginLeft: 15}}>
                <Text style={[commonStyles.lightText, {fontSize: 14}]}>Teaching assistant at ITB (2012 - 2014)</Text>
              </View>
            </View>

            <View style={[styles.experience]}>
              <View><Material name="school" size={17} color={'#00b16e'} /></View>
              <View style={{marginLeft: 15}}>
                <Text style={[commonStyles.lightText, {fontSize: 14}]}>Research assistant, Construction Engineering & Management Department  at ITB (2011 - 2012)</Text>
              </View>
            </View>

            <View style={[styles.experience]}>
              <View><Material name="school" size={17} color={'#00b16e'} /></View>
              <View style={{marginLeft: 15}}>
                <Text style={[commonStyles.lightText, {fontSize: 14}]}>Teaching assistant at ITB (2012 - 2014)</Text>
              </View>
            </View>

            <View style={[styles.experience]}>
              <View><Material name="school" size={17} color={'#00b16e'} /></View>
              <View style={{marginLeft: 15}}>
                <Text style={[commonStyles.lightText, {fontSize: 14}]}>Research assistant, Construction Engineering & Management Department  at ITB (2011 - 2012)</Text>
              </View>
            </View>
          </View> 
        </ScrollView>

        <View style={styles.footer}>
          <Text>
            <Text style={[commonStyles.boldText, {fontSize: 10, color: 'white'}]}>IDR</Text>
            <Text style={[commonStyles.boldText, {fontSize: 14, color: 'white'}]}>{' '}145k</Text>
            <Text style={[commonStyles.lightText, {fontSize: 14, color: 'white'}]}>{' '}/ lesson</Text>
          </Text>

          <TouchableOpacity style={[styles.roundedBtn, {borderColor: 'white', backgroundColor: 'transparent'}]}>
            <Text style={[commonStyles.boldText, styles.btnText, styles.scheduleBtnText]}>SCHEDULE SESSION</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default TeacherPage;

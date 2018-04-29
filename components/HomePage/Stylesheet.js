import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  fontLato: {
    fontFamily: 'Lato-Regular',
  },
  boldText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '700',
  },
  lightText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
  },
  header: {
    fontSize: 30,
    letterSpacing: 1,
    color: '#aaaaaa',
  },
  userName: {
    fontWeight: '700',
    color: '#00b16e',
  },
  scheduleWrapper: {
    marginTop: 30,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  upcomingText: {
    letterSpacing: 2,
    fontSize: 12,
    color: '#aaaaaa',
  },
  rightText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 12,
  },
  badge: {
    backgroundColor: '#00b16e',
    borderColor: '#00b16e',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 3, paddingBottom: 3,
    paddingLeft: 10, paddingRight: 10,
  },
  lessonWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  dateLesson: {
    fontWeight: '700',
    color: '#aaaaaa',
    letterSpacing: 1,
    fontSize: 12,
    marginBottom: 20,
  },
  cardView: {
    width: '100%', // or use alignSelf: 'stretch'
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 4,
    paddingTop: 15, paddingBottom: 15,
    paddingLeft: 20, paddingRight: 20,
    flexDirection: 'row',
  },
  cardLeft: {
    width: '70%',
    shadowColor: 'transparent',
  },
  cardRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '30%'
  },
  subjectName: {
    fontSize: 18,
  },
  teacherName: {
    fontSize: 14,
    color: '#d6d6d6',
  },
  badgeWrapper: {
    marginTop: 5,
    backgroundColor: '#1aa8c7',
    borderColor: '#1aa8c7',
    borderWidth: 1,
    borderRadius: 30,
    paddingTop: 2, paddingBottom: 2,
    paddingLeft: 5, paddingRight: 5,
    alignSelf: 'flex-start',
  },
  lessonType: {
    fontSize: 8,
    color: 'white',
    letterSpacing: 1,
  },
  roundedImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  timeWrapper: {
    marginTop: 20,
  },
  greenTime: {
    color: '#00b16e',
    marginLeft: 10,
  }
});
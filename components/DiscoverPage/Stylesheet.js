import { ScaledSheet } from 'react-native-size-matters';
export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  font12: {
    fontSize: 12,
  },
  fontColorGray: {
    fontSize: 12,
    color: '#828282',
  },
  topHeader: {
    paddingTop: 12, paddingBottom: 12,
    paddingLeft: 20, paddingRight: 20,
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 20, paddingRight: 20,
    backgroundColor: '#f2f4f5',
  },
  cardBorder: {
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: 'white',
    margin: 10,
    elevation: 7,
  },
  cardBodyWrapper: {
    paddingTop: 20, paddingBottom: 15,
    paddingLeft: 30, paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightCard: {
    paddingLeft: '20@s',
  },
  cardTeacher: {
    fontSize: '15@s',
    marginBottom: 10,
  },
  cardReview: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  cardLocation: {
    fontSize: 12,
    color: '#828282',
  },
  bodyCard: {
    paddingBottom: 5,
    paddingLeft: 30, paddingRight: 30,
    marginBottom: 15,
  },
  cardLessons: {
    marginBottom: 10,
    flexDirection:'row',
  },
  roundedButton: {
    marginRight: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    borderColor: '#00b16e',
    borderWidth: 1
  },
  lessonText: {
    fontSize: 10,
    color: '#00b16e',
    height: 13,
  },
  cardDescription: {
    fontSize: 12,
    color: '#828282',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 10, paddingBottom: 10,
    paddingLeft: 30, paddingRight: 30,
  },
  footerCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currency: {
    fontSize: 10,
    color: '#00b16e',
  },
  price: {
    fontSize: 14,
    color: '#00b16e',
  },
  additional: {
    fontSize: 14,
    color: '#00b16e',
  },
  roundedImg: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});
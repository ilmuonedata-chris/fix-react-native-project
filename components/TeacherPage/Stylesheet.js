import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    
  },
  teacherProfile: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 20, paddingRight: 20,
    alignItems: 'center',
  },
  roundedImg: {
    height: 95,
    width: 95,
    borderRadius: 45, // for heigh&width 80
    // borderRadius: '50@s', // for heigh&width 100
    marginBottom: 10,
  },
  teacherName: {
    fontSize: '20@s',
    letterSpacing: 1,
    color: '#4d4d4d',
  },
  teacherLocation: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#828282',
  },
  teacherReview: {
    flexDirection: 'row',
    marginTop: 5,
  },
  teacherStats: {
    marginTop: 10,
    paddingTop: 20, paddingBottom: 20,
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
  },
  statsWrapper: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  statsCol: {
    alignItems: 'center',
  },
  middleCol: {
    paddingLeft: 30, paddingRight: 30,
    borderLeftColor: '#eeeeee',
    borderLeftWidth: 1,
    borderRightColor: '#eeeeee',
    borderRightWidth: 1,
  },
  statsNum: {
    fontSize: '25@s',
  },
  teacherDetails: {
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
    padding: 20,
  },
  experience: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footer: {
    width: '100%',
    backgroundColor: '#00b16e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20, paddingRight: 20,
    paddingTop: 10, paddingBottom: 10,
  },
  
  scheduleBtnText: {
    fontSize: 12,
    color: 'white',
    letterSpacing: 1,
    paddingLeft: '10@s',
    paddingRight: '10@s',
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    letterSpacing: 1,
  },
  roundedBtn: {
    borderWidth: 1,
    borderColor: '#00b16e',
    borderRadius: 30,
    alignSelf: 'flex-start',
    marginRight: 8,
  },
  btnText: {
    color:'#00b16e',
    paddingLeft: '8@s',
    paddingRight: '8@s',    
    paddingTop: '5@s',
    paddingBottom: '5@s',
    fontSize: 10,
  },
})
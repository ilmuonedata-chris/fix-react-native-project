import { ScaledSheet } from 'react-native-size-matters';
export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20, paddingRight: 20,
  },
  textWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },
  topText: {
    letterSpacing: 2,
    fontSize: '30@s',
    marginTop: 10,
  },
  searchBar: {
    height: '35@s',
  },
  lessonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonLesson: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00b16e',
    marginTop: 5, marginBottom: 5,
    marginLeft: 5, marginRight: 5,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    shadowColor: "#00b16e",
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  discoverBtn: {
    backgroundColor: '#00b16e',
    alignSelf: 'center',
  },
  discoverText: {
    color: 'white',
    width: '220@ms',
    textAlign: 'center'
  }
});
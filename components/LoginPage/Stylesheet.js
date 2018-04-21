import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  fontLato: {
    fontFamily: 'Lato-Regular',
  },
  button: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    letterSpacing: 2,
    color: 'white',
    lineHeight: 30,
    padding: 10,
    textAlign: 'center',
    width: 320,
  },
  textWrapper: {
    marginTop: 12,
    flexDirection: 'row',
  },
  submitWrapper: {
    marginTop: 40,
    borderRadius: 30,
    borderColor: 'transparent',
    backgroundColor: '#00b16e',
    borderWidth: 1,
  },
  lightText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 12,
  },
  anchorLink: {
    fontFamily: 'Lato-Regular',
    color: '#006ce5',
    fontWeight: '400',
    fontSize: 12,
  },
  input: {
    width: 320,
    fontFamily: 'Lato-Regular',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 0, // for android
  },
  inputBorderBtm: {
    borderColor: '#eeeeee',
    borderBottomWidth: 1,
  },
  inputWrapper: {
    borderColor: '#eeeeee',
    borderWidth: 1,
    borderRadius: 5,
  },
});
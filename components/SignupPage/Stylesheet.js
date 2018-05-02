import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
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
  formWrapper: {
    width: '100%',
    marginTop: 10,
  },
  formLabel: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    letterSpacing: 2,
    color: '#b3b3b3'
  },
  formInput: {
    paddingTop: 15,
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    width: '100%',
  },
  itemWrapper: {
    marginBottom: 10,
  },
  customItem: {
    borderBottomWidth: 1,
    height: 60,
  },
  errorMessage: {
    color: '#ed2f2f',
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginTop: 5,
  },
  submitWrapper: {
    marginTop: 20,
    borderRadius: 30,
    borderColor: 'transparent',
    backgroundColor: '#00b16e',
    borderWidth: 1,
  },
  textWrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
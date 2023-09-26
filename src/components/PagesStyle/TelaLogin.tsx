import { StyleSheet } from 'react-native';

const loginstyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFCC66',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green', 
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textTransform: 'uppercase',

  },
  backgroundBox: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
  },  
  input: {
    width: '100%', 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', 
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  togglePasswordButton: {
    alignSelf: 'flex-end', 
    marginTop: -40, 
    marginRight: 10, 
  },
  togglePasswordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  signUpButton: {
    flex: 1,
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default loginstyles;

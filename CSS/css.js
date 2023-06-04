import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
   label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'gray',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    marginTop: 10,
    color: 'red',
  },
  heading: {
    color: 'red',
    padding: 20
  },
  backgroundBase: {
    padding: 2,
    flex: 1,
    backgroundColor: 'gray',
  },
  listaTexto: {
    color: 'red',
  },
  btnBase: {
    padding: 3, 

  }
  
  
});

export default AppStyles;

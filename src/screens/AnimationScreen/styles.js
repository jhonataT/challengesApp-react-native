import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'orange',
    marginVertical: 30,
  },
  button: {
    width: 100,
    padding: 10,
    backgroundColor: '#efe',
    
    marginBottom: 10,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonTitle: {
    color: '#000'
  }
})
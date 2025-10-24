import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>El Bruno, es muy foda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#2093",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:"#ffffff",
  },
});
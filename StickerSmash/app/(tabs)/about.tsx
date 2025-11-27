import { StyleSheet, Text, View } from 'react-native';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela do Bruno, pagina feita por Bruno, mais informações vai no meu git "brunobarmac"</Text>
   
    </View>
  );
}

const PlaceholderImage = require('@/assets/images/charizard-png.png');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000ff',
  },
});

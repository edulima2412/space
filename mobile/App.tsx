import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-950 flex-1">
      <Text>Hello World</Text>
      <StatusBar style="light" />
    </View>
  )
}

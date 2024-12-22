import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik text-3xl">Bnb</Text>
      <Link href={'/sign-in'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link
        href={{
          pathname: '/properties/[id]',
          params: { id: '2' },
        }}
      >
        Property
      </Link>
    </View>
  );
}

import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from '@/assets/images/favicon.png';

export default function AppLayout() {
  const { loading, isLogIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        {/* <ActivityIndicator className="text-primary-100" size={"large"} /> */}
        <Image
          source={logo}
          className="size-20 animate-pulse"
        />
      </SafeAreaView>
    )
  }

  if (!isLogIn) {
    return <Redirect href={'/sign-in'} />
  }

  return <Slot />
}
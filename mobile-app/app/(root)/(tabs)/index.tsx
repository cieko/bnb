import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";
import images from "@/constants/images";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Home() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image
              source={images.avatar}
              className="size-12 rounded-full"
            />

            <View className="flex flex-col items-start ml-2 justify-center relative">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-xl font-rubik-bold text-accent-100">Cieko</Text>

              <View className='bg-primary-200 w-32 h-2 absolute left-0 -bottom-2' />
            </View>
          </View>

          <Image
            source={icons.bell}
            className="size-6"
          />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-accent-100">See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row gap-5 mt-5">
          <FeaturedCard />
          <FeaturedCard />
        </View>

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-accent-100">See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Filters />

        <View className="flex flex-row gap-5 mt-5">
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: { icon: ImageSourcePropType, title: string, onPress?: () => void, textStyle?: string, showArrow?: boolean }) => (
  <TouchableOpacity onPress={onPress} className='flex flex-col items-center justify-between py-3'>
    <View className='flex flex-col items-center gap-1 border border-primary-100/20 w-24 h-24 justify-center rounded-2xl'>
      <Image
        source={icon}
        className='size-14'
        // tintColor={'#2803bd'}
      />

      <Text className={`text-xs font-rubik-medium text-primary-100/50 ${textStyle ?? ''}`}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => { 
    const result = await logout();

    if (result) {
      Alert.alert("Success", "You have been logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "An error occured while logging out")
    }
  }

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'
      >
        <View className='flex flex-row items-center justify-between mt-5 relative'>
          <Text className='text-xl font-rubik-bold w-20 text-accent-100'>Profile</Text>

          <View className='bg-primary-200 w-20 h-2 absolute left-0 top-7' />

          <Image
            source={icons.bell}
            className='size-5'
            tintColor={'#2803bd'}
          />
        </View>

        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image
              source={{ uri: user?.avatar ?? icons.person }}
              className='size-44 relative rounded-full'
            />

            <TouchableOpacity className='absolute bottom-11 right-2'>
              <Image
                source={icons.edit}
                className='size-9'
                tintColor={'#d1005d'}
              />
            </TouchableOpacity>

            <Text className='text-2xl font-rubik-bold mt-2'>{user?.name ?? 'Cieko | Developer'}</Text>
          </View>
        </View>

        <View className='flex flex-row mt-10 gap-x-5 flex-wrap'>
          {settings.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}

          <SettingsItem icon={icons.logout} title='Logout' textStyle='text-danger' showArrow={false} onPress={handleLogout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
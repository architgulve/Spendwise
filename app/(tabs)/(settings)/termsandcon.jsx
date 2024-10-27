import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../../components/backbutton';

// Terms and Conditions Component
const TermsConditions = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <View className="w-full h-16 bg-black  p-4">
      <View className="flex flex-row justify-between items-center w-full">
            <Text className="text-white font-semibold text-2xl">Terms and Conditions</Text>
            <BackButton />
          </View>
      </View>
      <ScrollView className="flex-1 bg-black p-4  mb-[80px]">
        {/* 1. Acceptance of Terms */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">1. Acceptance of Terms</Text>
          <Text className="text-white">
            By downloading, accessing, or using the <Text className="font-bold">Expense Tracker App</Text> ("App"), 
            you agree to comply with and be bound by these Terms and Conditions ("Terms"). 
            If you do not agree with these Terms, please do not use the App.
          </Text>
        </View>

        {/* 2. App Usage */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">2. App Usage</Text>
          <Text className="text-white">
            The <Text className="font-bold">Expense Tracker App</Text> is designed to help users manage and track 
            their personal expenses. It provides tools for budgeting, categorizing expenses, and generating reports. 
            You agree to use the App solely for its intended purpose and in accordance with all applicable laws.
          </Text>
        </View>

        {/* 3. User Responsibilities */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">3. User Responsibilities</Text>
          <View className="ml-4">
            <Text className="text-white mb-2">• <Text className="font-bold">Accuracy of Information:</Text> You are responsible for ensuring that all data entered into the App is accurate and complete.</Text>
            <Text className="text-white mb-2">• <Text className="font-bold">Personal Use:</Text> The App is provided for personal use. Any commercial use or misuse of the App is strictly prohibited.</Text>
            <Text className="text-white mb-2">• <Text className="font-bold">Security:</Text> You are responsible for maintaining the confidentiality of your login information and for any activity that occurs under your account.</Text>
          </View>
        </View>

        {/* 4. Data Privacy */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">4. Data Privacy</Text>
          <Text className="text-white">
            Your privacy is important to us. We collect, store, and process your personal data in accordance 
            with our Privacy Policy. By using the App, you consent to the collection and use of information 
            as outlined in the Privacy Policy.
          </Text>
        </View>

        {/* 5. Limitations of Liability */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">5. Limitations of Liability</Text>
          <View className="ml-4">
            <Text className="text-white mb-2">• <Text className="font-bold">No Financial Advice:</Text> The App is not intended to provide financial advice. We are not liable for any financial decisions or actions you take based on the information provided by the App.</Text>
            <Text className="text-white mb-2">• <Text className="font-bold">Accuracy of Data:</Text> While we strive to provide accurate and up-to-date information, the App may occasionally contain errors or inaccuracies. We do not guarantee the accuracy, reliability, or completeness of the information in the App.</Text>
            <Text className="text-white mb-2">• <Text className="font-bold">Third-Party Services:</Text> The App may include integrations with third-party services, such as payment processors or financial institutions. We are not responsible for the performance or availability of these services.</Text>
          </View>
        </View>

        {/* 6. Termination */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">6. Termination</Text>
          <Text className="text-white">
            We reserve the right to suspend or terminate your access to the App at any time, without notice, 
            for any violation of these Terms or other reasons that may impact the security or functionality of the App.
          </Text>
        </View>

        {/* 7. Changes to Terms */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">7. Changes to Terms</Text>
          <Text className="text-white">
            We may modify these Terms at any time. You are responsible for reviewing the Terms periodically 
            to stay informed of any updates. Your continued use of the App after any changes constitutes 
            acceptance of the revised Terms.
          </Text>
        </View>

        {/* 8. Governing Law */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">8. Governing Law</Text>
          <Text className="text-white">
            These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. 
            Any disputes arising from the use of the App will be subject to the exclusive jurisdiction of the 
            courts in [Insert Jurisdiction].
          </Text>
        </View>

        {/* 9. Contact Information */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">9. Contact Information</Text>
          <Text className="text-white">
            If you have any questions about these Terms or the App, please contact us at [Insert Contact Information].
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsConditions;
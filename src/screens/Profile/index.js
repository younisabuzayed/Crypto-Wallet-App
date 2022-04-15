import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { HeaderBar, MainLayout, SectionTitle, Setting } from '../../components';
import { dummyData, icons } from '../../constants';
import styles from './styles';

const Profile = () => {

    const [faceId, setFaceId] = React.useState(true);
    return (
        <MainLayout>
            <View
              style={styles.container}>
                {/* Header */}
                <HeaderBar
                  title="Profile" />
                <ScrollView>
                    {/* Email & User Id */}
                    <View
                      style={styles.emailUserStatus}>
                        {/* Email & ID */}
                        <View
                          style={styles.emailID}>
                            <Text
                              style={styles.email}>{dummyData.profile.email}</Text>
                            <Text
                              style={styles.userid}>ID: {dummyData.profile.id}</Text>
                        </View>
                        {/* Status */}
                        <View
                          style={styles.statusContainer}>
                            <Image
                              source={icons.verified}
                              style={styles.iconVerified} />
                            <Text
                              style={styles.textVerified}>Verified</Text>
                        </View>
                    </View>

                    {/* App */}
                    <SectionTitle
                      title="App" />
                    <Setting
                      title="Launch Screen"
                      value="Home"
                      type="button"
                      onPress={() => console.log('Pressed')} />
                    <Setting
                      title="Appearance"
                      value="Dark"
                      type="button"
                      onPress={() => console.log('Pressed')} />

                    {/* Account */}
                    <SectionTitle
                      title="Account" />
                    <Setting
                      title="Payment Currency"
                      value="USD"
                      type="button"
                      onPress={() => console.log('Pressed')} />
                    <Setting
                      title="Language"
                      value="English"
                      type="button"
                      onPress={() => console.log('Pressed')} />
                      
                    {/* SECURITY */}
                    <SectionTitle
                      title="Security" />
                    <Setting
                      title="FaceID"
                      value={faceId}
                      type="switch"
                      onPress={(value) => setFaceId(value)} />
                    <Setting
                      title="Password Settings"
                      value=""
                      type="button"
                      onPress={() => console.log('Pressed')} />
                    <Setting
                      title="Change Password"
                      value=""
                      type="button"
                      onPress={() => console.log('Pressed')} />
                    <Setting
                      title="2-Factor Authentication"
                      value=""
                      type="button"
                      onPress={() => console.log('Pressed')} />
                </ScrollView>
            </View>
        </MainLayout>
    )
}

export default Profile;
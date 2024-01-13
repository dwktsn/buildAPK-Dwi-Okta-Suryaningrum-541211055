import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Linking } from 'react-native';


const Porto = () => {
  const bukaInstagram = () => {
    Linking.openURL('https://www.instagram.com/dwioktasn_/');
  };
  const bukaemail = () => {
    Linking.openURL('mailto:dwioktasn@gmail.com');
  };
  const bukawp = () => {
    Linking.openURL('https://lupapassword.com/');
  };


  return (
    <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
      <View
        style={{
          flex: 1,
          alignItems: '',
          justifyContent: 'center',
          marginHorizontal: 10,
          padding: 20,
        }}>
        <Image
          style={{
            width: 110,
            height: 110,
            borderRadius: 150,
            marginBottom: 10,
            alignSelf: 'center',
          }}
          source={require('../assets/arum.png')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            padding: 16,
            alignSelf: 'center',
          }}>
          Dwi Okta
        </Text>
        <Text
          style={{
            fontFamily: 'serif',
            textAlign: 'justify',
            fontSize: 12,
            margin: 8,
          }}>
          My name is Dwi Okta Suryaningrum, and I am a student at Telkom
          Purwokerto Vocational School, majoring in software engineering. I am interested in the world of programming. Currently, I am 18 years
          old, and one of my hobbies is playing music.
        </Text>
        <View style={{ flexDirection: 'row', padding:10 }}>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
          <Text
            style={{ paddingHorizontal: 10, fontSize: 15, fontWeight: 'bold' }}>
            Contact
          </Text>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
        </View>

        <TouchableOpacity onPress={bukaInstagram}>
        <View style={{
          marginBottom: 10,
          flexDirection: 'row', // Ini untuk mengatur teks dan gambar secara horizontal
          alignItems: 'center', // Ini untuk mengatur penempatan vertikal di tengah
          backgroundColor: 'transparent',
          padding: 5,
          height: 30,
          borderRadius: 30,
          borderColor: 'black',
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <Image style={{width:20, height:20, marginRight:10}} source={require('../assets/instagram.png')} />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Instagram</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={bukaemail}>
        <View style={{
          marginBottom: 10,
          flexDirection: 'row', // Ini untuk mengatur teks dan gambar secara horizontal
          alignItems: 'center', // Ini untuk mengatur penempatan vertikal di tengah
          backgroundColor: 'transparent',
          padding: 5,
          height: 30,
          borderRadius: 30,
          borderColor: 'black',
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <Image style={{width:20, height:20, marginRight:10}} source={require('../assets/gmail.png')} />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>dwioktasn@gmail.com</Text>
      </View>
      </TouchableOpacity>
      
      <View style={{
          marginBottom:10,
          flexDirection: 'row', // Ini untuk mengatur teks dan gambar secara horizontal
          alignItems: 'center', // Ini untuk mengatur penempatan vertikal di tengah
          backgroundColor: 'transparent',
          padding: 5,
          height: 30,
          borderRadius: 30,
          borderColor: 'black',
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <Image style={{width:20, height:20, marginRight:10}} source={require('../assets/telephone.png')} />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>085225539988</Text>
      </View>

      <View style={{ flexDirection: 'row', padding:10 }}>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
          <Text
            style={{ paddingHorizontal: 10, fontSize: 15, fontWeight: 'bold' }}>
            My Project
          </Text>
          <View
            style={{
              height: 2,
              flex: 1,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}></View>
        </View>

        <View
        style={{
          flex: 1,
          alignItems: '',
          justifyContent: 'center',
          marginHorizontal: -7,
          padding: 10,
        }}>
        <Image
          style={{
            width: 310,
            height: 160,
            borderRadius: 10,
            alignSelf: '1',
          }}
          source={require('../assets/project.png')}
        />
        <Text style={{ padding:5, fontWeight: 'bold', fontSize:11, color:'grey' }}> App Design
        </Text>

        <Image
          style={{
            width: 310,
            height: 160,
            borderRadius: 10,
            alignSelf: '1',
          }}
          source={require('../assets/project2.png')}
        />
        <Text style={{ padding:5, fontWeight: 'bold', fontSize:11, color:'grey' }}> Web Absensi
        </Text>
        <Image
          style={{
            width: 310,
            height: 160,
            borderRadius: 10,
            alignSelf: '1',
          }}
          source={require('../assets/project3.png')}
        />
        <TouchableOpacity onPress={bukawp}>
        <Text style={{ padding:5, fontWeight: 'bold', fontSize:11, color:'grey' }}> Wordpress
        </Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Porto;

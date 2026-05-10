import React from 'react';
import { Image, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />

        {/* HEADER */}
        <View style={styles.children}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/medical-logo-vector_284160-1720.jpg',
            }}
            style={styles.logo}
          />

          <Text style={styles.heading}>Sign In</Text>

          <Text style={styles.subHeading}>Let's experience the joy of telecare AI.</Text>
        </View>

        {/* INPUT SECTION */}
        <View style={styles.inputParent}>
          <View>
            <Text style={styles.label}>Email Address</Text>

            <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor={'gray'} />
          </View>

          <View>
            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </View>

          {/* BUTTON */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </View>
        </View>

        {/* SOCIAL SECTION */}
        <View style={styles.social}>
          <Pressable style={styles.socialBox}>
            <Image
              style={styles.socialIcon}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuJOZzykgBcnzCUFo-Yc7lJZkLnRWAAPmbw&s',
              }}
            />
          </Pressable>

          <Pressable style={styles.socialBox}>
            <Image
              style={styles.socialIcon}
              source={{
                uri: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-black-icon.png',
              }}
            />
          </Pressable>

          <Pressable style={styles.socialBox}>
            <Image
              style={styles.socialIcon}
              source={{
                uri: 'https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png',
              }}
            />
          </Pressable>
        </View>

        {/* Account Creation */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },

  children: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subHeading: {
    color: 'gray',
    marginTop: 4,
  },

  inputParent: {
    gap: 20,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    elevation: 2,
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  button: {
    width: '100%',
    backgroundColor: 'rgba(98, 163, 14, 0.9)',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginTop: 40,
  },

  socialBox: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  socialIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

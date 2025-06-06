// src/screens/JobSeeker/UploadCVScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UploadCVScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tải CV lên</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});

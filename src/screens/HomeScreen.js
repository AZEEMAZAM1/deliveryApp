// // // // filepath: /Users/user/Desktop/MyApp/frontend/src/screens/HomeScreen.js

// // // import React from 'react';

// // // const HomeScreen = () => {
// // //   return (
// // //     <div>
// // //       <h1>Welcome to the Delivery Driver App</h1>
// // //     </div>
// // //   );
// // // };

// // // export default HomeScreen;
// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
 
// // const HomeScreen = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Welcome to the Delivery Driver App!</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   text: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default HomeScreen;

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the Delivery Driver App!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Ensures the container takes up the full screen
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f4f4f4', // Matches the global background color
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333', // Adds a dark text color for better visibility
//   },
// });

// export default HomeScreen;

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const handleStartDelivery = () => {
    Alert.alert('Delivery Started', 'You have started the delivery!');
  };

  const handleCompleteDelivery = () => {
    Alert.alert('Delivery Completed', 'You have completed the delivery!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Delivery Driver App!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Delivery"
          onPress={handleStartDelivery}
          color="#4CAF50" // Green button
        />
        <Button
          title="Complete Delivery"
          onPress={handleCompleteDelivery}
          color="#2196F3" // Blue button
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4', // Matches the global background color
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Adds a dark text color for better visibility
    marginBottom: 20, // Adds spacing below the text
  },
  buttonContainer: {
    width: '80%', // Ensures buttons are not too wide
    marginTop: 20, // Adds spacing above the buttons
    justifyContent: 'space-between',
    height: 100, // Space between buttons
  },
});

export default HomeScreen;
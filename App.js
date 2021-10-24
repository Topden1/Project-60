import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
   var AppNavigator = createSwitchNavigator({
      HomeScreen:HomeScreen,
      SummaryScreen:SummaryScreen,
    })

    var class_ref =await db.ref('/').on('value', data => {
      var all_students = []
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });

    updateAttendance(roll_no, status) {
      var id = '';
      if (roll_no <= 9) {
        id = '0' + roll_no;
      } else {
        id = roll_no;
      }

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;

      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd ='0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = dd + '-' + mm + '-' + yyyy;
      var ref_path = id;
      var class_ref = db.ref(ref_path);
      class_ref.update({
        [today]: status,
      });
    }

    const AppContainer = createAppContainer(AppNavigator)
    import {createAppContainer, createSwitchNavigator}from 'react-navigation';
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

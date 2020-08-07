import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
//import HighchartsReactNative from './highcharts/src/HighchartsReactNative';
//'./highcharts/src/HighchartsReactNative';
//import { WebView } from 'react-native-webview';
import { chartOptions } from './Data';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  render() {
    if(!this.state.visible)
      return (
        <SafeAreaView style={styles.container}>
          <Text>Reloading...</Text>
        </SafeAreaView>
      )

    return (
      <SafeAreaView style={styles.container}>
        <Button
         title="Reload"
         onPress={() => {
           this.setState({ visible: false });
           setTimeout(() => {
            this.setState({ visible: true });
           }, 2000);
         }}
        />
        
        <ScrollView style={styles.scrollView}>
          {
            chartOptions.map((option, index) => (
              <React.Fragment key={ option.mykey }>
                <Text>{option.title.text}</Text>
                <HighchartsReactNative
                  useCDN={false}
                  styles={styles.chart}
                  options={option}
                //devPath={'192.168.0.1:12345'}
                //useCDN={true}
                //useSSL={true}
                //modules={modules}
                />
              </React.Fragment>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 300,
    borderColor: 'blue',
    borderWidth: 1
  },
  button: {
    justifyContent: 'center'
  }
});
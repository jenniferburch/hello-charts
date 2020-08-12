import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button } from 'react-native';
import { HcWrapper } from './HcWrapper';
import { chartDef } from './Data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  render() {
    const factor = 250;

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
            chartDef.map((definition, index) => (
              <React.Fragment key={ definition.mykey }>
                <Text>{definition.options.title.text}</Text>
                <HcWrapper options={definition.options} modules={definition.modules} delay={ index*factor }/>
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
  button: {
    justifyContent: 'center'
  }
});
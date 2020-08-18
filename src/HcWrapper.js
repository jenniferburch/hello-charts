import React from 'react';
import { Text, StyleSheet } from 'react-native';

import HighchartsReactNative from '@highcharts/highcharts-react-native';

export class HcWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    console.log("Loading ", this.props.options.title.text);
    
    // setTimeout(() => {
    //   this.setState({ loading: false });
    //   console.log("Loading ", this.props.options.title.text);
    // }, this.props.delay);
  }

  componentWillUnmount() {
    console.log("Unloading ", this.props.options.title.text)
  }

  render() {
    if (this.state.loading)
      return (<Text>Loading {this.props.options.title.text} </Text>)

    return (
      <HighchartsReactNative
        useCDN={false}
        styles={styles.chart}
        options={this.props.options}
        modules={this.props.modules}
      //devPath={'192.168.0.1:12345'}
      //useCDN={true}
      //useSSL={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 300,
    borderColor: 'blue',
    borderWidth: 1
  }
});
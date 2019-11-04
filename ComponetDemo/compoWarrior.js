import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  Image,
  TouchableOpacity
}
  from 'react-native';
class componentFirst extends Component{

  render(){
    return(
      <View style={styles.body2}>
          <View style={styles.component3}>
            <View style={styles.component4}>
              <TouchableOpacity onPress={this.props.onProtect}>
                <View>
                  <Image resizeMode='contain' style={{ width: 90, height: 90, borderWidth: 1 }} source={require('./image/protect.png')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={this.props.onAttack}>
                <View>
                  <Image resizeMode='contain' style={{ width: 90, height: 90, borderWidth: 1 }} source={require('./image/click.png')} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
              <Image resizeMode='contain' style={{ width: 122, height: 183, borderWidth: 1 }} source={require('./image/Knight.png')} />
              <Text style={styles.textPlayer1}>{this.props.point}</Text>
            </View>

          </View>

        </View>
    )
  }
}
export default componentFirst;

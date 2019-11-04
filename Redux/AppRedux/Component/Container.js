import React, { Component } from 'react';
import Warrior from './Warrior'
import styles from '../styles';
import {
  Text,
  View,
  Image,
  TouchableOpacity
}
  from 'react-native';
import { connect } from 'react-redux';
import AddAll from '../Action/AddAll';
import AddWarrior1 from '../Action/AddWarrior1';
import AddWarrior2 from '../Action/AddWarrior2';
class App extends Component {
  render() {
    return (
        <View style={styles.container}>

          <View style={styles.body1}>

            <View style={styles.component1}>
              <Image resizeMode='contain' style={{ width: 130, height: 129, borderWidth: 1 }} source={require('../image/ppp.jpg')} />
              <View>
                <Text style={styles.textHeader1}>Họ và Tên: Nguyễn Tấn Huy</Text>
                <Text style={styles.textHeader1}>MSSV: 17110303</Text>
              </View>
            </View>

            <View style={styles.component2}>
              <TouchableOpacity onPress={this.allRefresh}>
                <Image resizeMode='contain' style={{ width: 50, height: 50, borderWidth: 1 }} source={require('../image/refresh.png')} />
              </TouchableOpacity>
              <View style={styles.textHeader2}>
                <TouchableOpacity onPress={this.props.allAttack}>
                  <View>
                    <Image resizeMode='contain' style={{ width: 90, height: 90, borderWidth: 1 }} source={require('../image/attack.png')} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.text}>{this.props.point}</Text>
              </View>
            </View>

          </View>
          <View style={styles.body2}>
            <Warrior point={this.props.point1} onProtect={this.props.onProtect} onAttack={this.props.onAttack} />
            <Warrior point={this.props.point2} onProtect={this.props.onAttack} onAttack={this.props.onProtect} />
          </View>

        </View>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    allAttack: () => dispatch(AddAll),
    onProtect: () => dispatch(AddWarrior1),
    onAttack: () => dispatch(AddWarrior2),
    dispatch
  }
}
export default connect(
  state => state
  , mapDispatchToProps
)(App);
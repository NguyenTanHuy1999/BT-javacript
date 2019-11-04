import React, { Component } from 'react';
import Warrior from '../compoWarrior';
import styles from '../styles';
import {
  Text,
  View,
  Image,
  TouchableOpacity
}
  from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 1,
      point1: 1,
      point2: 1,
    };
    this.allAttack = this.allAttack.bind(this);
    this.allRefresh = this.allRefresh.bind(this);
    this.protect1=this.protect1.bind(this);
    this.attack1=this.attack1.bind(this);
    this.protect2=this.protect2.bind(this);
    this.attack2=this.attack2.bind(this);
  }

  protect1() {
    const {point,point1,point2}=this.state;
    this.setState({point1:point1+1});
  }

  attack1() {
    const {point,point1,point2}=this.state;
    this.setState({point2:point2+1});
  }
  protect2() {
    const {point,point1,point2}=this.state;
    this.setState({point2:point2+1});
  }
  attack2() {
    const {point,point1,point2}=this.state;
    this.setState({point1:point1+1});
  }

  allAttack() {
    const { point, point1, point2 } = this.state;
    this.setState({ point: point + 1, point1: point1 + 1, point2: point2 + 1 });
  }

  allRefresh() {
    this.setState({ point: 1, point1: 1, point2: 1 });
  }
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
              <TouchableOpacity onPress={this.allAttack}>
                <View>
                  <Image resizeMode='contain' style={{ width: 90, height: 90, borderWidth: 1 }} source={require('../image/attack.png')} />
                </View>
              </TouchableOpacity>
              <Text style={styles.text}>{this.state.point}</Text>
            </View>
          </View>

        </View>
        <View style={styles.body2}>
          <Warrior
          point={this.state.point1}
            onProtect={this.protect1}
            onAttack={this.attack1}
            
          />
          <Warrior
          point={this.state.point2}
            onProtect={this.protect2}
            onAttack={this.attack2}
            
          />
        </View>

      </View>
    )
  }
}
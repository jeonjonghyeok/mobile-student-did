/*import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import logo from "../../assets/ayu_icon.png";

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View styley={style.header}>
        <Image style={style.tinyLogo} source={logo} />
        <Text>안녕하세요 ~님</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("PasswordScreen")}
          style={{ width:"60%",backgroundColor: "blue" }}
        >
          <Text style={{ fontSize: "20", color: "white" }}>검증</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default MainScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width:"100%",
    height:"40%",
    backgroundColor:"green",
  },
  content: {
    width:"100%",
    height:"40%",
    backgroundColor:"red",
  },
  footer: {
    width:"100%",
    height:"20%",
    backgroundColor:"yellow",
  },
  tinylog: {},
});
*/

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import logo from "../../assets/ayu_icon.png";

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Image
          style={{height:'100%',width:'100%',resizeMode:'contain'}}
          source={require('../../assets/logo1.jpg')}/>
        </View>
        <View style={style.content}>
          <View style={styles.container2}>
            <View style={styles.dhls}>
              <Text>ddd</Text>

            </View>
            <View>
            
            </View>

          </View>
          
            
        </View>
        <View style={style.footer}>
         
         
        </View>
      </View>
    );
  }
}
export default MainScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width:"100%",
    height:"30%",
    backgroundColor:"green",
  },
  content: {
    width:"100%",
    height:"40%",
    backgroundColor:"red",
    justifyContent:"center",
    //alignItems:"center",
  },
  footer: {
    width:"100%",
    height:"20%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"yellow",
  },
  
  
  tinylog: {},
});
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  dhls: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dhfms: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
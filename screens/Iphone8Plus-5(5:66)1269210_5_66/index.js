import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_6_47}>
        <Text style={styles.Text_6_47}>Back to Menu</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caf4/c809/0a27688073c15d51ee962601356553f3"
        }}
        style={styles.ImageBackground_6_48}
      />
      <View style={styles.View_7_85} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e2a/a540/113e8e01c8ca6e54d2777946d4afdd32"
        }}
        style={styles.ImageBackground_8_122}
      />
      <View style={styles.View_7_112}>
        <Text style={styles.Text_7_112}>C2</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c95/2543/9967a28dae6b83d6774ac8345cfe559d"
        }}
        style={styles.ImageBackground_7_84}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c5/9ae4/d0d1ce252f18bcb70c41a66a8a8a2b71"
        }}
        style={styles.ImageBackground_7_87}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ea/530a/14fdc82e2c10e987dedd70c5c8f75e01"
        }}
        style={styles.ImageBackground_7_88}
      />
      <View style={styles.View_7_90} />
      <View style={styles.View_7_96} />
      <View style={styles.View_7_100} />
      <View style={styles.View_7_101} />
      <View style={styles.View_7_97} />
      <View style={styles.View_7_98} />
      <View style={styles.View_7_102} />
      <View style={styles.View_7_103} />
      <View style={styles.View_7_104} />
      <View style={styles.View_7_105} />
      <View style={styles.View_7_106} />
      <View style={styles.View_7_107} />
      <View style={styles.View_7_91}>
        <Text style={styles.Text_7_91}>C2</Text>
      </View>
      <View style={styles.View_7_113}>
        <Text style={styles.Text_7_113}>C8</Text>
      </View>
      <View style={styles.View_7_114}>
        <Text style={styles.Text_7_114}>C7</Text>
      </View>
      <View style={styles.View_7_115}>
        <Text style={styles.Text_7_115}>C6</Text>
      </View>
      <View style={styles.View_7_116}>
        <Text style={styles.Text_7_116}>C5</Text>
      </View>
      <View style={styles.View_7_117}>
        <Text style={styles.Text_7_117}>C12</Text>
      </View>
      <View style={styles.View_7_118}>
        <Text style={styles.Text_7_118}>C11</Text>
      </View>
      <View style={styles.View_7_119}>
        <Text style={styles.Text_7_119}>C10</Text>
      </View>
      <View style={styles.View_7_120}>
        <Text style={styles.Text_7_120}>C9</Text>
      </View>
      <View style={styles.View_7_110}>
        <Text style={styles.Text_7_110}>C3</Text>
      </View>
      <View style={styles.View_7_111}>
        <Text style={styles.Text_7_111}>C4</Text>
      </View>
      <View style={styles.View_7_108}>
        <Text style={styles.Text_7_108}>C1</Text>
      </View>
      <View style={styles.View_8_123}>
        <Text style={styles.Text_8_123}>Select Your Court</Text>
      </View>
      <View style={styles.View_8_153}>
        <Text style={styles.Text_8_153}>By clicking the court</Text>
      </View>
      <View style={styles.View_8_154} />
      <View style={styles.View_8_155}>
        <Text style={styles.Text_8_155}>Check out</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 198, 198, 1)" },
  View_2: { height: hp("101%") },
  View_6_47: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_6_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_48: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_7_85: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_8_122: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("77%"),
    resizeMode: "cover"
  },
  View_7_112: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_7_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_73: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_7_74: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_7_75: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_7_76: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("24%"),
    resizeMode: "cover"
  },
  ImageBackground_7_77: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("65%"),
    resizeMode: "cover"
  },
  ImageBackground_7_78: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("65%"),
    resizeMode: "cover"
  },
  ImageBackground_7_79: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("65%"),
    resizeMode: "cover"
  },
  ImageBackground_7_80: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("65%"),
    resizeMode: "cover"
  },
  ImageBackground_7_81: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  ImageBackground_7_82: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  ImageBackground_7_83: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  ImageBackground_7_84: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("45%"),
    resizeMode: "cover"
  },
  ImageBackground_7_87: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%")
  },
  ImageBackground_7_88: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("28%")
  },
  View_7_90: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_96: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_100: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_101: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_97: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_98: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_102: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_103: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_104: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_105: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_106: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_107: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_7_91: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_7_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_113: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_7_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_114: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_7_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_115: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_7_115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_116: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_7_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_117: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_7_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_118: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_7_118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_119: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_7_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_120: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_7_120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_110: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_7_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_111: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_7_111: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_108: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_7_108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_123: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_8_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_8_153: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_8_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_8_154: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("90%"),
    backgroundColor: "rgba(17, 77, 81, 1)"
  },
  View_8_155: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_8_155: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

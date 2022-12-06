import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import Input from "../Atoms/Input";
import { Button } from "../Atoms/Button";
import { UserContext } from "../context/context";
import { fetchAPI } from "../utils/fetchAPI";
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from "../styleGeneral/colors";

// import useBooleanAsyncStorage from "../utils/asyncStorage";
import CheckBox from "../Molecules/CheckBoxLogin";

const LoginForm = ({ navigation }) => {
  const { username, setUsername, password, setPassword, setSoneURL, setMemberID, setEventCompany } = useContext(UserContext);
  const [check, setCheck] = useState(false)

  const [activateSecureStore, setActivateSecureStore] = useState(null)
  // const { secureLoginCred, deleteStorage } = useSecureStore(activateSecureStore);
  // const [value, setBoolean] = useBooleanAsyncStorage('@checkLogin')


  const handleUsername = text => setUsername(text);
  const handlePassword = text => setPassword(text);



  const handleClick = async () => {
    const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/login.php?validationToken=123', { username: username, password: password })
    if (res) {
      setSoneURL(res.soneURL)
      setMemberID(res.cccMembers)
      setEventCompany(res.cccEventCompany)
      if (res.result == "OK") {
        navigation.navigate('Main')
        if (check) {
          // secureLoginCred();
        }
      } else {
        alert('login error')
      }
    }


  }

  const handleLogout = async () => {
    // deleteStorage();
    // setBoolean(false)

  }

  useEffect(() => {
    //Will trigger the useSecure store from "../api/secureStore" : and store the Login Credential
    setActivateSecureStore(true);
  }, [])

  const handleCheckBox = () => {
    // setBoolean(true)
    setCheck(true);
  }
  return (
    <View style={styles.view}>
      <Input
        value={username}
        defaultValue={username}
        placeholder={'Username'}
        handleText={handleUsername}
        style={styles.genericInput}
        secureTextEntry={false} />
      <Input
        value={password}
        placeholder={'Password'}
        handleText={handlePassword}
        style={styles.genericInput}
        secureTextEntry={true} />
      {username && password && <CheckBox text={'Save Credentials'} state={check} onPress={handleCheckBox} />}

      <Button
        onPress={handleClick}
        text={'Login'}
        Icon={<MaterialCom name="login-variant" style={styles.icon} />}
      />
      {/* Display Lougout Button only after checkbox: checked */}
      {check && (
        <Button
          onPress={handleLogout}
          text={'Logout'}
          containerStyle={styles.logout}
          textStyle={styles.logoutText}
        />
      )}


    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%'
  },
  genericInput: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.loginInputColor,
    marginBottom: 5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
    color: 'black'
  },
  icon: {
    color: 'white',
    fontSize: 19,
    marginRight: 3,
    marginTop: 2,
  },
  //styles the logout Button:
  logout: {
    height: 60,
    marginTop: 10,
    backgroundColor: '#e6e7e8'
  },
  logoutText: {
    color: '#a1a4aa',
    fontSize: 17,
  }
})



export default LoginForm;
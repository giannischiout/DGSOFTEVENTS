import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import Input from "../Atoms/Input";
import { Button } from "../Atoms/Button";
import { UserContext } from "../context/context";
import { fetchAPI } from "../utils/fetchAPI";
import { COLORS } from "../styleGeneral/colors";
import * as Keychain from 'react-native-keychain';
import useBooleanAsyncStorage from "../utils/asyncStorage";
import CheckBox from "../Molecules/CheckBoxLogin";
import { ViewRow } from "../Atoms/ViewRow";
import Ion from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const LoginForm = ({ navigation }) => {
  const { username, setUsername, password, setPassword, setSoneURL, setMemberID, setEventCompany } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const [value, setBoolean] = useBooleanAsyncStorage('@checkLogin')


  const handleUsername = text => setUsername(text);
  const handlePassword = text => setPassword(text);

  const storeCred = async () => {
      if(password && username && value) {
        console.log('username ' + username)
        console.log('password ' + password)
        await Keychain.setGenericPassword(username, password);
      }
      
    
  };

  const handleClick = async () => {
    setLoading(true)
    const res = await fetchAPI('https://ccmde1.cloudon.gr/BNI/login.php?validationToken=123', { username: username, password: password })
    if (res) {
      setSoneURL(res.soneURL)
      setMemberID(res.cccMembers)
      setEventCompany(res.cccEventCompany)
      if (res.result == "OK") {
        navigation.navigate('Main')
        storeCred();
        
      } else {
        alert('login error')
      }
    }
    setLoading(false)

  }

  const handleLogout = async () => {
    const logout = await Keychain.resetGenericPassword();
    if (logout && value) {
      // resaveCheckBox();
      setUsername('');
      setPassword('')
      setBoolean(false)
      // setLoading(prev => !prev);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        console.log('useEffect')
        const credentials = await Keychain.getGenericPassword();
        console.log(credentials)
        if (credentials) {
          setPassword(credentials.password);
          setUsername(credentials.username);
        } else {
          console.log('No credentials stored');
        }
      } catch (error) {
        // console.log("Keychain couldn't be accessed!", error);
      }
    })();
  }, []);

  const handleCheckBox = () => {
    // setCheck(true);
    setBoolean(true)
  }


  return (
    <View style={styles.view}>
      <ViewRow style={styles.inputContainer}>
        <View style={styles.iconView}>
          <Ion style={styles.icon} name={'person-sharp'}/>
        </View>
        <Input
          value={username}
          style={styles.genericInput}
          defaultValue={username}
          placeholder={'Username'}
          handleText={handleUsername}
          secureTextEntry={false} />
      </ViewRow>
      <ViewRow style={styles.inputContainer}>
        <View style={styles.iconView}>
          <Entypo style={styles.icon} name={'lock'}/>
        </View>
        <Input
        value={password}
        style={styles.genericInput}
        placeholder={'Password'}
        handleText={handlePassword}
        secureTextEntry={true} />
      </ViewRow>
     
      
      {username && password && <CheckBox text={'Save Credentials'} state={value} onPress={handleCheckBox} />}

      <Button
        onPress={handleClick}
        text={'Login'}
        spinner={loading}
      />
      {/* Display Lougout Button only after checkbox: checked */}
      {value && (
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
    color: 'black',
    width: '100%'
  },
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.loginInputColor,
    marginBottom: 5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
    color: 'black'
  },
  iconLogin: {
    color: 'white',
    fontSize: 17,
    marginRight: 8,
    marginTop: 2,
  },
  //styles the logout Button:
  logout: {
    height: 30,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  logoutText: {
    color: '#a1a4aa',
    fontSize: 17,
  }, 
  personIcon: {
    color: 'black'
    
  },
  icon: {
    // marginRight: 5,
    color: '#b2b0b1',
  }, 
  iconView: {
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  }

})



export default LoginForm;
import React, { useState, useEffect, createContext } from "react";
import { StyleSheet, View } from "react-native";

export const UserContext = createContext()


export const Layout = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [soneURL, setSoneURL] = useState('');
  const [memberID, setMemberID] = useState('')
  const [cccEventCompany, setEventCompany] = useState('')

  return (
    <UserContext.Provider style={styles.container} value={{ username, setUsername, password, setPassword, soneURL, setSoneURL, memberID, setMemberID, cccEventCompany, setEventCompany }}>
      {children}
    </UserContext.Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

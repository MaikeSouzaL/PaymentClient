import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import config from "./config/index.json";

export default function App() {
  const [nome, setNome] = useState(""); // Estado para o nome
  const [email, setEmail] = useState(""); // Estado para o email
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function sendServer() {
      let response = await fetch(config.urlRoot, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: 100,
          name: "Maike de souza leite",
        }),
      });
      let json = await response.json();
      console.log(json);
    }
    sendServer();
  }, []);

  return (
    <View style={styles.container}>
      <Text>ola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, {useState, useContext} from 'react'
import { FlashContext } from '../../src/contexts/FlashContext';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';


export default function CreateCardModal(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const {addCardToDeck} = useContext(FlashContext);
    const router = useRouter();
    const {deckId} = useLocalSearchParams<{deckId: string}>();

    const handleCreate = () => {
        if(!question.trim() || !answer.trim() || !deckId) return;
        addCardToDeck(deckId, {question: question.trim(), answer: answer.trim()});
        router.back();
    };
    return (
    <View style={styles.container}>
      <Text style={styles.label}>New Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Create Card" onPress={handleCreate} />
    </View>
  );


}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        backgroundColor: "#fff",
    },
    label:{
        fontSize:18,
        marginBottom: 8,
        textAlign:"center",
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        padding:12,
        marginBottom:16,
    },
});
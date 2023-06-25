import { TextInput } from "react-native"
import { styles } from "./styles"

export const Input = (props) => {
    return <TextInput
        {...props}
        placeholderTextColor='#fff'
        style={styles.container}
    />
}
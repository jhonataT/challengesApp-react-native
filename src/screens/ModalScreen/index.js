import { Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { useState } from "react";

export const ModalScreen = ({ navigation }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    }
    const handleCloseModal = () => setModalIsOpen(false);

    return <View style={styles.container}>
        <Header
            title='Modal'
            navigation={navigation}
        />
        <View style={styles.content}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleOpenModal()}
            >
                <Text>Abrir Modal</Text>
            </TouchableOpacity>
            <Modal isVisible={modalIsOpen}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.closeButton]}
                        onPress={handleCloseModal}
                    >
                        <Text>Fechar Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    </View>
}
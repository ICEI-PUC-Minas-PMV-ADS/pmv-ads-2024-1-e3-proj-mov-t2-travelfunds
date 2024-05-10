import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputSetPerfil from "../components/InputSetPerfil";
import BotaoMenor from "../components/BotaoMenor";
import Header from "../components/Header";
import { Icon, Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CriarViagem = () => {
    const navigation = useNavigation();

    const initialState = { desc: '', date: new Date(), showDatePicker: false }

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState })
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker: false })}
            mode='date' />
        
        const dateString = moment(this.state.date).format('DD/MM/YYYY')

        if(Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }
        
        return datePicker
    }    


    return (
        <>
        <Header 
        title={'Criar Viagem'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
        </Header>


        <View style={styles.container}>

            <View style={styles.topSection}>
                <View style={styles.roundComponent}>
                    <Text
                        style={styles.overlayText}>
                        <Icon source="camera" size={40} />
                    </Text>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <InputSetPerfil label="Qual seu destino?" /> 
                <InputSetPerfil label="Data de Ida" /> 
                {getDatePicker()} {}
                <InputSetPerfil label="Data de Volta?" />
                {getDatePicker()} {}
                <BotaoMenor text="Criar" />
            </View>

        </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0CBD4',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topSection: {
        flex: 1,
        width: '100%',
        backgroundColor: '#012B53',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    roundComponent: {
        width: 150,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -40,
    },
    bottomSection: {
        flex: 2,
        width: '90%',
        backgroundColor: '#012B53',
        padding: 10,
        marginTop: '15%',
        marginBottom: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

});

export default CriarViagem; 
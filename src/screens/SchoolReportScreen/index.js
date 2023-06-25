import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CardInfo } from "../../components/CardInfo";
import { Input } from "../../components/Input";
import { useState } from "react";

const formInputList = [
    { id: 1, title: 'Matemática', placeholder: 'Nota no primeiro bimestre', name: 'resultMath1' },
    { id: 2, title: null, placeholder: 'Nota no segundo bimestre', name: 'resultMath2' },
    { id: 3, title: null, placeholder: 'Nota no terceiro bimestre', name: 'resultMath3' },
    { id: 4, title: null, placeholder: 'Nota no quarto bimestre', name: 'resultMath4', mean: 'mathMean' },
    { id: 5, title: 'Física', placeholder: 'Nota no primeiro bimestre', name: 'resultPh1' },
    { id: 6, title: null, placeholder: 'Nota no segundo bimestre', name: 'resultPh2' },
    { id: 7, title: null, placeholder: 'Nota no terceiro bimestre', name: 'resultPh3' },
    { id: 8, title: null, placeholder: 'Nota no quarto bimestre', name: 'resultPh4', mean: 'phMean' },
    { id: 9, title: 'Português', placeholder: 'Nota no primeiro bimestre', name: 'resultPor1' },
    { id: 10, title: null, placeholder: 'Nota no segundo bimestre', name: 'resultPor2' },
    { id: 11, title: null, placeholder: 'Nota no terceiro bimestre', name: 'resultPor3' },
    { id: 12, title: null, placeholder: 'Nota no quarto bimestre', name: 'resultPor4', mean: 'portMean' },
];

const FormGroup = ({ data, handleChangeReport, handleSaveNewMean }) => {
    return <View style={styles.formGroup}>
        { data?.title && <Text style={styles.formTitle}>{data.title}</Text> }
        <Input
            placeholder={data.placeholder}
            keyboardType='numeric'
            onChangeText={(value) => handleChangeReport(data.name, value)}
        />
        {data.id % 4 === 0 && <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleSaveNewMean(data.mean)}
        >
            <Text style={styles.buttonLabel}>Calcular Média</Text>
        </TouchableOpacity>}
    </View>
};

export const SchoolReportScreen = ({ navigation }) => {
    const [schoolReportValues, setSchoolReportValues] = useState({
        mathMean: 0,
        phMean: 0,
        portMean: 0
    });

    const handleChangeReport = (name, value) => {
        setSchoolReportValues({
            ...schoolReportValues,
            [name]: value
        });
    }

    const handleSaveNewMean = (value = 'mathMean') => {
        if(value === 'mathMean') {
            if(
                !schoolReportValues.resultMath1 ||
                !schoolReportValues.resultMath2 ||
                !schoolReportValues.resultMath3 ||
                !schoolReportValues.resultMath4
            ) {
                alert("Preencha todas as notas");
                return;
            }

            const newMean = Number(schoolReportValues.resultMath1) + 
            Number(schoolReportValues.resultMath2) + 
            Number(schoolReportValues.resultMath3) +
            Number(schoolReportValues.resultMath4);

            setSchoolReportValues({
                ...schoolReportValues,
                [value]: newMean / 4
            });
        } else if(value === 'phMean') {
            if(!schoolReportValues.resultPh1 ||
                !schoolReportValues.resultPh2 ||
                !schoolReportValues.resultPh3 ||
                !schoolReportValues.resultPh4
            ) {
                alert("Preencha todas as notas");
                return;
            }

            const newMean = Number(schoolReportValues.resultPh1) +
            Number(schoolReportValues.resultPh2) +
            Number(schoolReportValues.resultPh3) +
            Number(schoolReportValues.resultPh4);

            setSchoolReportValues({
                ...schoolReportValues,
                [value]: newMean / 4
            });
        } else if(value === 'portMean') {
            if(
                !schoolReportValues.resultPor1 ||
                !schoolReportValues.resultPor2 ||
                !schoolReportValues.resultPor3 ||
                !schoolReportValues.resultPor4
            ) {
                alert("Preencha todas as notas");
                return;
            }

            const newMean = Number(schoolReportValues.resultPor1) +
            Number(schoolReportValues.resultPor2) +
            Number(schoolReportValues.resultPor3) +
            Number(schoolReportValues.resultPor4);

            setSchoolReportValues({
                ...schoolReportValues,
                [value]: newMean / 4
            });
        }
    }

    return <View style={styles.container}>
        <Header title='Boletim escolar' navigation={navigation}/>
        <View style={styles.cardsGroup}>
            <CardInfo
                title='Matemática'
                subtitle={`${schoolReportValues.mathMean} - ${schoolReportValues.mathMean >= 7 ? 'Aprovado' : 'Reprovado'}`}
            />
            <CardInfo
                title='Física'
                subtitle={`${schoolReportValues.phMean} - ${schoolReportValues.phMean >= 7 ? 'Aprovado' : 'Reprovado'}`}
            />
        </View>
        <View style={styles.cardsGroup}>
            <CardInfo
                title='Português'
                subtitle={`${schoolReportValues.portMean} - ${schoolReportValues.portMean >= 7 ? 'Aprovado' : 'Reprovado'}`}
            />
        </View>
        <FlatList
            style={styles.list}
            data={formInputList}
            keyExtractor={row => String(row?.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <FormGroup
                data={item}
                {...{
                    handleChangeReport,
                    handleSaveNewMean
                }}
            />}
        />
    </View>
}
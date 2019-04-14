import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker } from 'react-native';
import Button from '../button/Button';
import Card from '../card/Card';
import CardSection from '../card/CardSection';
import Spinner from '../spinner/Spinner';
import { studentChange, studentCreate } from '../../actions';

class StudentCreate extends Component {

    clickSave() {
        const { studentName, surname, studentNumber, sube } = this.props;

        this.props.studentCreate({ studentName, surname, studentNumber, sube });
    }

    renderButton() {
        if (!this.props.loading) {
          return <Button onPress={this.clickSave.bind(this)}> KAYDET </Button>;
        }
        return <Spinner size="small" />;
      }

    render() {
        const { inputStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.props.studentName}
                        onChangeText={studentName => this.props.studentChange({ props: 'studentName', value: studentName})}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.props.surname}
                        onChangeText={surname => this.props.studentChange({ props: 'surname', value: surname})}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.props.studentNumber}
                        onChangeText={studentNumber => this.props.studentChange({ props: 'studentNumber', value: studentNumber})}
                    />
                </CardSection>

                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                    style={{ flex: 1 }}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChange({ props: 'sube', value: sube})}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                        <Picker.Item label="D şubesi" value="dsube" />
                    </Picker>
                </CardSection>


                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        )
    }
}

const styles = {

    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }

};

const mapStateToProps = ({ StudentsListResponse }) => {
    const { studentName, surname, studentNumber, sube, loading } = StudentsListResponse;
    return { studentName, surname, studentNumber, sube, loading };
}

export default connect(mapStateToProps, { studentChange, studentCreate })(StudentCreate);
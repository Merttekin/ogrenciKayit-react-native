import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { CardSection } from '../card/CardSection';

class ListItem extends Component{
    render(){
        const { studentName, surname } = this.props.student;
        return(
            <View>
                <CardSection>
                    <Text>
                        { studentName } { surname }
                    </Text>
                </CardSection>
            </View>
        )
    }
};

export default ListItem;
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login/LoginForm';
import StudentsList from './components/student/StudentsList';
import StudentCreate from './components/student/StudentCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="kimlik">
                <Scene
                    onRight={() => Actions.studentCreate()}
                    rightTitle="Yeni"
                    key="studentsList"
                    component={StudentsList}
                    title="Öğrenci Listesi"
                />
                <Scene
                    key="studentCreate"
                    component={StudentCreate}
                    title="Öğrenci Kaydet"
                />
                <Scene key="login" component={LoginForm} title="Giriş Ekranı" />

            </Scene>
        </Router>
    );
}

export default RouterComponent;
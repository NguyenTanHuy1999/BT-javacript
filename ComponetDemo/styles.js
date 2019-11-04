import {
    StyleSheet 
}
    from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
    body1: {
        flex: 1,
        flexDirection: 'column'
    },
    body2: {
        flex: 1,
        flexDirection: 'row',
    },
    component1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    component2: {
        flex: 1,
        flexDirection: 'column',
    },
    component3: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 5,
    },
    component4: {
        flex: 1,
        flexDirection: 'row'
    },
    component5: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 5,
    },
    textHeader1: {
        fontSize: 17,
        marginLeft: 15
    },
    textHeader2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        marginRight: 50
    },
    textPlayer1: {
        fontSize: 50
    }
});
export default styles;

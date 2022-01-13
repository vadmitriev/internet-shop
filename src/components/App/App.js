import {useColorTheme} from 'hooks/useColorTheme';
import ThemeButton from "../ThemeButton/ThemeButton";
import './App.css';

function App() {
    const {colorTheme, toggleColorTheme} = useColorTheme({
        saveInLocalStorage: true,
    });

    const onChangeTheme = () => {
        toggleColorTheme();
    };

    return (
        <div className="App">
            <div>
                App
            </div>
            <ThemeButton onClick={onChangeTheme} colorTheme={colorTheme} />
        </div>
    );
}

export default App;

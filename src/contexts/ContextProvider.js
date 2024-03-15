import React , {createContext , useContext ,useState} from 'react'

const stateContext = createContext();

//check which icon in navbar is clicked
const initialState =
{
    chat : false ,
    cart : false ,
    userProfile : false ,
    notification : false ,
}

export const ContextProvider = ( {children} )=> {
    //check the state of sidebar icon 
    const [activeMenu , setActiveMenu] = useState(true);
    //check the state of navbar icons 
    const [isClicked , setIsClicked] = useState(initialState);
    //check size of rhe screen to decideif sidebar is shown by default or not
    const [screenSize , setScreenSize] = useState(undefined);

    const[currentColor ,setCurrentColor ]=useState('#03C9D7');
    const[currentMode , setCurrentMode]=useState('Light');
    const[themeSettings , setThemeSettings] = useState(false)

    const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
      setThemeSettings(false);
    };


    const setColor = (color/*e*/) => {
      setCurrentColor(/*e.target.value*/color);
      localStorage.setItem('colorMode', /*e.target.value*/color);
      setThemeSettings(false);
    };

    const handleClick = (clicked) => { 
        //save all values of object unless the clicked elemenyt turn its value in the obj to true
        setIsClicked({ ...initialState, [clicked]: true });
    }
    
   
    return(
      <stateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            isClicked ,  setIsClicked,
            handleClick,
            screenSize ,  setScreenSize,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode,
            themeSettings , setThemeSettings,
            setMode , setColor
        }}
      >
        {children}
       </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)
const defaultValue=
    { 
        themed:false,
    
    }


    export const themeReducer=(state=defaultValue,action)=>{ 
        switch(action.type){
            case "SWITCH_THEME":
              
                return{
                    ...state,
                    themed:!state.themed
                   
                }
                
            default:
                return state
        }
    }

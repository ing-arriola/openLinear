import { UIState } from "./"

type UIActionType = | {type:'UI-Open-SideDrawew'} | {type:'UI-Close-SideDrawew'}

export const uiReducer = (state:UIState, action:UIActionType) => {
    switch (action.type) {
        case 'UI-Open-SideDrawew':
            return{
                ...state,
                sideDrawerOpen:true
            }
        case 'UI-Close-SideDrawew':
            return{
                ...state,
                sideDrawerOpen:false
            }
    
        default:
            state;
    }    
}
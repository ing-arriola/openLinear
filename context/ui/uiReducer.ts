import { UIState } from "./"

type UIActionType = | {type:'UI-Open-SideDrawer'} | {type:'UI-Close-SideDrawer'}

export const uiReducer = (state:UIState, action:UIActionType) : UIState=> {
    switch (action.type) {
        case 'UI-Open-SideDrawer':
            return{
                ...state,
                sideDrawerOpen:true
            }
        case 'UI-Close-SideDrawer':
            return{
                ...state,
                sideDrawerOpen:false
            }
        default:
            return state;
    }    
}
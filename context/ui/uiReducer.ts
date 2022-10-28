import { UIState } from "./"

type UIActionType = | {type:'UI-Open-SideDrawer'} | {type:'UI-Close-SideDrawer'} | {type: "UI-Set-IsAddingEntry"; payload: boolean; }

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
        case 'UI-Set-IsAddingEntry':
            return{
                ...state,
                isAdding:action.payload
            }
        default:
            return state;
    }    
}
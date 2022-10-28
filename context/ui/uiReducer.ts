import { UIState } from "./"

type UIActionType = 
| {type:'UI-Open-SideDrawer'} 
| {type:'UI-Close-SideDrawer'} 
| {type: "UI-Set-IsAddingEntry"; payload: boolean; } 
| {type: "UI-Start-Dragging" } 
| {type: "UI-End-Dragging" }

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
        case 'UI-Start-Dragging':
            return{
                ...state,
                isDragging:true
            }
        case 'UI-End-Dragging':
            return{
                ...state,
                isDragging:false
            }
        default:
            return state;
    }    
}
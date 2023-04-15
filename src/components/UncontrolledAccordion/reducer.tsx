export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'
export type ActionType = ReturnType<typeof UncontrolledAccordionAC>
export type StateType = {
    collapsed: boolean
}
export const UncontrolledAccordionAC = () => {
    return {
        type: TOGGLE_COLLAPSED
    } as const
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}

    }
    return state
}
import { Reducer } from "redux";

import { SettingState, SettingActionTypes } from "./types";

const initialState = {
    dataCollectionFields: [],
    users: [],
    registeredUsers: [],
    rolloverUsers: [],
    onboardingUsers: [],
    selectedRegisterUser: null,
    selectedOnboardingUser: null,
    selectedRolloverUser: null,
    selectedUser: null,
    reps: null,
    subscribers: null,
    userCountPerWeek: null,
    subcriberCountPerWeek: null,
    subscriberCountPerPlan: null,
    answers: {},
};

const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SettingActionTypes.GET_DATA_COLLECTION_FIELDS: {
            return { ...state, dataCollectionFields: action.payload };
        }
        case SettingActionTypes.UPDATE_DATA_COLLECTION_FIELD: {
            return {
                ...state,
                dataCollectionFields: state.dataCollectionFields.map((e) =>
                    e.id === action.payload.id ? action.payload : e
                ),
            };
        }
        case SettingActionTypes.ADD_DATA_COLLECTION_FIELD: {
            return {
                ...state,
                dataCollectionFields: [
                    ...state.dataCollectionFields,
                    action.payload,
                ],
            };
        }
        case SettingActionTypes.DELETE_DATA_COLLECTION_FIELD: {
            return {
                ...state,
                dataCollectionFields: state.dataCollectionFields.filter(
                    (e) => e.id !== action.payload
                ),
            };
        }
        case SettingActionTypes.GET_USERS: {
            return {
                ...state,
                registeredUsers: action.payload.registered,
            };
        }
        case SettingActionTypes.GET_ANALYTIC_DATA: {
            return {
                ...state,
                subscribers: action.payload.subscribers,
                userCountPerWeek: action.payload.userCountPerWeek,
                subcriberCountPerWeek: action.payload.subcriberCountPerWeek,
                subscriberCountPerPlan: action.payload.subscriberCountPerPlan,
            };
        }
        case SettingActionTypes.GET_USER_DETAIL: {
            return {
                ...state,
                selectedUser: action.payload.result,
                reps: action.payload.reps,
            };
        }
        case SettingActionTypes.ADD_DOCUMENT_ADMIN: {
            if (state.selectedUser !== null)
                return {
                    ...state,
                    selectedUser: {
                        ...state.selectedUser,
                        document: [
                            ...state.selectedUser?.document,
                            action.payload,
                        ],
                    },
                };
            else return { ...state };
        }
        case SettingActionTypes.GET_DOCUMENTS_ADMIN: {
            if (state.selectedUser !== null)
                return {
                    ...state,
                    selectedUser: {
                        ...state.selectedUser,
                        document: action.payload,
                    },
                };
            else return { ...state };
        }
        case SettingActionTypes.UPDATE_USER_ADMIN: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    is_active: action.payload.result.is_active,
                },
            };
        }
        case SettingActionTypes.SAVE_DYMANIC_LIST: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    dynamic_list: action.payload,
                },
            };
        }
        case SettingActionTypes.CHABGE_REP:
        case SettingActionTypes.UPADTE_GOAL:
        case SettingActionTypes.ENABLETODOLIST: {
            return { ...state, selectedUser: action.payload };
        }

        case SettingActionTypes.GET_ONBOARDING_USER_DETAIL: {
            return { ...state, selectedOnboardingUser: action.payload };
        }
        case SettingActionTypes.GET_ROLLOVER_USER_DETAIL: {
            return { ...state, selectedRolloverUser: action.payload };
        }
        case SettingActionTypes.GET_ANSWERS: {
            return {
                ...state,
                answers: action.payload,
            };
        }
        case SettingActionTypes.CHECK_POINT_RESULTS: {
            return {
                ...state,
                selectedUser: {
                    ...state.selectedUser,
                    checkpoint: action.payload,
                },
            };
        }
        case SettingActionTypes.DELETE_USER: {
            return {
                ...state,
                registeredUsers: state.registeredUsers.filter((item) => item.id != action.payload),
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as settingReducer };

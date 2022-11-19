import { Reducer } from "redux";
import { Toast } from "@/components/common/notification";

import { AuthState, AuthActionTypes } from "./types";

// const user =
//   typeof window !== "undefined" && localStorage.getItem("user")
//     ? localStorage.getItem("user")
//     : null;
// localStorage.getItem("user") || null;
// const user = localStorage.getItem("user");
const initialState: AuthState = {
  user: null,
  token: '',
  loadDashboard: false,
  answers: [],
  missingDataNum: 0,
  userCollectionData: [],
  documents: [],
  isFetching: false,
  coupon_data: null,
  intro_user: null,
};

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.EMAIL_LOGIN:
    case AuthActionTypes.REGISTER:
    case AuthActionTypes.FACEBOOK_LOGIN:
    case AuthActionTypes.GOOGLE_LOGIN:
    case AuthActionTypes.UPDATE_DISCLOSURE:
    case AuthActionTypes.SELECT_PLAN:
    case AuthActionTypes.BUY_PLAN:
    case AuthActionTypes.UPDATE_QUESTIONNARE:
    case AuthActionTypes.UPDATE_PLAID_ACCESS_TOKEN:
    case AuthActionTypes.UPDATE_YODLEE_ACCESS_TOKEN:
    case AuthActionTypes.ID_VERIFIED:
    case AuthActionTypes.ENROLLMEET:
    case AuthActionTypes.WHEALTH_CONCIERGE_MEET:
    case AuthActionTypes.ADVISOR_MEET:
    case AuthActionTypes.CHOOSE_PLAN_AGAIN:
    case AuthActionTypes.UPDATE_COLLECTION_DATA: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...action.payload.user,
    //       passTwoFactor: state.user ? state.user.passTwoFactor : false,
    //     })
    //   );
      return {
        ...state,
        token: action.payload.access_token,
        user: {
          ...action.payload.user,
          passTwoFactor: state.user ? state.user.passTwoFactor : false,
        },
      };
    }
    case AuthActionTypes.GET_USER:
    case AuthActionTypes.UPDATE_PROFILE_STEP: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...action.payload.user,
    //       passTwoFactor: state.user ? state.user.passTwoFactor : false,
    //     })
    //   );
      return {
        ...state,
        user: {
          ...action.payload.user,
          passTwoFactor: state.user ? state.user.passTwoFactor : false,
        },
      };
    }
    case AuthActionTypes.GOTO_PROFILE_STEP: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({ ...state.user, isSignUpProcess: true })
    //   );
      return {
        ...state,
        user: { ...state.user, isSignUpProcess: true },
      };
    }
    case AuthActionTypes.PUT_COLLECTION_FILE:
    case AuthActionTypes.DELETE_COLLECTION_FILE:
    case AuthActionTypes.GET_USER_COLLECTION: {
      let missing = action.payload.filter(
        (e) => e.datas.length === 0 && e.require
      ).length;
      return {
        ...state,
        missingDataNum: missing,
        userCollectionData: action.payload,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return { ...state, user: null, token: null };
    }

    case AuthActionTypes.VERIFY_PHONE_NUMBER: {
      return { ...state, isFetching: false };
    }

    case AuthActionTypes.LOAD_DASHBOARD: {
      return { ...state, loadDashboard: true };
    }

    case AuthActionTypes.CONFIRM_CODE: {
      const { phone_number, phone_number_verified_at } = action.payload;
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       phone_number,
    //       phone_number_verified_at,
    //     })
    //   );

      return {
        ...state,
        isFetching: false,
        user: {
          ...state.user,
          phone_number,
          phone_number_verified_at,
        },
      };
    }

    case AuthActionTypes.TWO_FACTOR_REQUEST: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       twoFactorSent: true,
    //     })
    //   );

      return {
        ...state,
        isFetching: false,
        user: {
          ...state.user,
          twoFactorSent: true,
        },
      };
    }

    case AuthActionTypes.TWO_FACTOR_RESEND: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       twoFactorSent: true,
    //     })
    //   );

      return {
        ...state,
        isFetching: false,
        user: {
          ...state.user,
          twoFactorSent: true,
        },
      };
    }

    case AuthActionTypes.TWO_FACTOR_VERFIY: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       passTwoFactor: true,
    //       twoFactorSent: false,
    //       profile_complete_step: action.payload.profile_complete_step,
    //       default_two_factor_method: action.two_factor_method,
    //     })
    //   );

      return {
        ...state,
        isFetching: false,
        user: {
          ...state.user,
          passTwoFactor: true,
          twoFactorSent: false,
          profile_complete_step: action.payload.profile_complete_step,
          default_two_factor_method: action.two_factor_method,
        },
      };
    }

    case AuthActionTypes.REQUEST_DATA: {
      return { ...state, isFetching: true };
    }

    case AuthActionTypes.REQUEST_DONE: {
      return { ...state, isFetching: false };
    }

    case AuthActionTypes.REQUEST_ERROR: {
      let errorMessage: any = Object.values(action.payload.data)[0];
      console.log("error message->", errorMessage);
      console.log("type=>", typeof errorMessage);
      let message = "Invalid Code";
      if (typeof errorMessage === "object") {
        message = errorMessage.join("");
      } else if (typeof errorMessage === "string") {
        message = errorMessage;
      }
      Toast("", message, "danger");
      return { ...state, isFetching: false };
    }

    case AuthActionTypes.UPDATE_TWO_FACTOR_ENTRY: {
      return {
        ...state,
        user: {
          ...state.user,
          twoFactorSent: false,
        },
      };
    }

    case AuthActionTypes.UPDATE_USER_PROFILE: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       profile: action.payload.profile,
    //       todos: action.payload.todos,
    //     })
    //   );

      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload.profile,
          todos: action.payload.todos,
        },
      };
    }

    case AuthActionTypes.ADD_DOCUMENT_PROFILE: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       ...state.user,
    //       profile: {
    //         ...state.user?.profile,
    //         [action.payload.key]: action.payload.profile[action.payload.key],
    //       },
    //     })
    //   );
      console.log({
        [action.payload.key]: action.payload.profile[action.payload.key],
      });
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user?.profile,
            [action.payload.key]: action.payload.profile[action.payload.key],
          },
        },
      };
    }

    case AuthActionTypes.UPDATE_TODOLIST: {
    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({ ...state.user, todos: action.payload.todos })
    //   );

      return {
        ...state,
        user: {
          ...state.user,
          todos: action.payload.todos,
        },
      };
    }

    case AuthActionTypes.ADD_DOCUMENT: {
      return {
        ...state,
        documents: [...state.documents, action.payload],
      };
    }

    case AuthActionTypes.GET_DOCUMENTS: {
      return {
        ...state,
        documents: action.payload,
      };
    }

    case AuthActionTypes.UPDATE_DOCUMENTS: {
      return {
        ...state,
        documents: state.documents.map((document) =>
          action.payload.id == document.id ? action.payload : document
        ),
      };
    }

    case AuthActionTypes.UPDATE_COUPONDATA: {
      return {
        ...state,
        coupon_data: action.payload,
      };
    }

    case AuthActionTypes.INTRO_USER: {
      return {
        ...state,
        intro_user: action.payload,
        isFetching: true,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { reducer as authReducer };

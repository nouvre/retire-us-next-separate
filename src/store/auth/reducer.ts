import { Reducer } from 'redux'
import { Toast } from '@/components/common/notification'

import { AuthState, AuthActionTypes } from './types'

// const user =
//   typeof window !== "undefined" && localStorage.getItem("user")
//     ? localStorage.getItem("user")
//     : null;
// localStorage.getItem("user") || null;
// const user = localStorage.getItem("user");

const user = {
  id: 1,
  name: 'admin',
  email: 'admin@admin.com',
  email_verified_at: null,
  profile_complete_step: 6,
  authenticate_type: null,
  role: 'admin',
  created_at: '2022-08-24T20:53:20.000000Z',
  updated_at: '2022-08-24T20:53:20.000000Z',
  stripe_id: null,
  pm_type: null,
  pm_last_four: null,
  trial_ends_at: null,
  phone_number: null,
  phone_number_verified_at: null,
  sms_code: null,
  sms_code_sent_at: null,
  id_verified: 1,
  default_two_factor_method: 'phone',
  state: null,
  enroll_meet: 0,
  whealth_concierge_meet: 0,
  advisor_meet: 0,
  rep_id: 0,
  cur_retirement_value: null,
  retirement_goal: null,
  is_active: 1,
  user_type: 'normal',
  dynamicTodos: [],
  todos: [
    {
      id: 1,
      name: 'Complete your profile',
      type: 'link',
      link: '/start-planning',
      completed: null,
    },
    {
      id: 2,
      name: 'Meet your Wealth Concierge',
      type: 'window',
      link: 'https://meetings.hubspot.com/jv2/retireus',
      completed: null,
    },
    {
      id: 3,
      name: 'Schedule your Analysis Review',
      type: 'custom',
      link: '/dashboard',
      completed: null,
    },
    {
      id: 4,
      name: 'Meet your Advisor ',
      type: 'custom',
      link: '/dashboard',
      completed: null,
    },
    {
      id: 5,
      name: 'Verify your Account',
      type: 'link',
      link: '/verify',
      completed: null,
    },
    {
      id: 6,
      name: 'Schedule your Planning Review',
      type: 'manual',
      link: '/dashboard',
      completed: null,
    },
  ],
  paymentMethod: null,
  isSignUpProcess: true,
  disclosure_agreements: null,
  plans: [],
  selected_plan: null,
  current_plan: null,
  profile: null,
  rep: null,
  checkpoint: null,
  passTwoFactor: false,
}

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2ODk2NzcwNCwibmJmIjoxNjY4OTY3NzA0LCJqdGkiOiJjb1hTN0RHblVxTVJXREpqIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.MRG9wFOZN4Z4yb61iZN7OaLxHbBNLZQ06LrpzyiiKq4'

const initialState: AuthState = {
  user: user as any,
  token: token,
  loadDashboard: false,
  answers: [],
  missingDataNum: 0,
  userCollectionData: [],
  documents: [],
  isFetching: false,
  coupon_data: null,
  intro_user: null,
}

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
      }
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
      }
    }
    case AuthActionTypes.GOTO_PROFILE_STEP: {
      //   localStorage.setItem(
      //     "user",
      //     JSON.stringify({ ...state.user, isSignUpProcess: true })
      //   );
      return {
        ...state,
        user: { ...state.user, isSignUpProcess: true },
      }
    }
    case AuthActionTypes.PUT_COLLECTION_FILE:
    case AuthActionTypes.DELETE_COLLECTION_FILE:
    case AuthActionTypes.GET_USER_COLLECTION: {
      let missing = action.payload.filter(
        (e) => e.datas.length === 0 && e.require,
      ).length
      return {
        ...state,
        missingDataNum: missing,
        userCollectionData: action.payload,
      }
    }
    case AuthActionTypes.LOGOUT: {
      return { ...state, user: null, token: null }
    }

    case AuthActionTypes.VERIFY_PHONE_NUMBER: {
      return { ...state, isFetching: false }
    }

    case AuthActionTypes.LOAD_DASHBOARD: {
      return { ...state, loadDashboard: true }
    }

    case AuthActionTypes.CONFIRM_CODE: {
      const { phone_number, phone_number_verified_at } = action.payload
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
      }
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
      }
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
      }
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
      }
    }

    case AuthActionTypes.REQUEST_DATA: {
      return { ...state, isFetching: true }
    }

    case AuthActionTypes.REQUEST_DONE: {
      return { ...state, isFetching: false }
    }

    case AuthActionTypes.REQUEST_ERROR: {
      let errorMessage: any = Object.values(action.payload.data)[0]
      console.log('error message->', errorMessage)
      console.log('type=>', typeof errorMessage)
      let message = 'Invalid Code'
      if (typeof errorMessage === 'object') {
        message = errorMessage.join('')
      } else if (typeof errorMessage === 'string') {
        message = errorMessage
      }
      Toast('', message, 'danger')
      return { ...state, isFetching: false }
    }

    case AuthActionTypes.UPDATE_TWO_FACTOR_ENTRY: {
      return {
        ...state,
        user: {
          ...state.user,
          twoFactorSent: false,
        },
      }
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
      }
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
      })
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user?.profile,
            [action.payload.key]: action.payload.profile[action.payload.key],
          },
        },
      }
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
      }
    }

    case AuthActionTypes.ADD_DOCUMENT: {
      return {
        ...state,
        documents: [...state.documents, action.payload],
      }
    }

    case AuthActionTypes.GET_DOCUMENTS: {
      return {
        ...state,
        documents: action.payload,
      }
    }

    case AuthActionTypes.UPDATE_DOCUMENTS: {
      return {
        ...state,
        documents: state.documents.map((document) =>
          action.payload.id == document.id ? action.payload : document,
        ),
      }
    }

    case AuthActionTypes.UPDATE_COUPONDATA: {
      return {
        ...state,
        coupon_data: action.payload,
      }
    }

    case AuthActionTypes.INTRO_USER: {
      return {
        ...state,
        intro_user: action.payload,
        isFetching: true,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export { reducer as authReducer }

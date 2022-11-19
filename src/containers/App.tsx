import React, { useEffect, Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Space } from 'antd'
import AdminLayout from '../routes/AdminLayout'
import MainRoute from '../routes'
import { ApplicationState } from '@/store'
import ProfileCompleteStep from '../constants/routes'
import axios from '../util/api'
import { Toast } from '@/components/common/notification'
import { setLoadDashboard, verifyIdentify } from '@/store/auth/action'

const RestrictedRoute = ({ component: Component, token, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      token ? <Component {...props} /> : <Redirect href={'/signin'} />
    }
  />
)

const PageLoader = () => (
  <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div>
)

// Start Dynamic Page Import

const Home = lazy(() => import('@/pages/Home'))
const OurServices = lazy(() => import('@/pages/OurServices'))
const AboutUs = lazy(() => import('@/pages/AboutUs'))
const Blog = lazy(() => import('@/pages/Blog'))
const Post = lazy(() => import('@/pages/Post'))
const Intro = lazy(() => import('@/pages/Intro'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const Planning = lazy(() => import('@/pages/Planning'))
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'))
const GetStarted = lazy(() => import('@/pages/GetStarted'))
const Questionnare = lazy(() => import('@/pages/Questionnare'))
const QuestionnaireResult = lazy(() =>
  import('@/pages/Questionnare/QuestionnaireResult'),
)
const Recommendation = lazy(() =>
  import('@/pages/Questionnare/Recommendation'),
)
const Dima = lazy(() => import('@/pages/Dima'))
const Video = lazy(() => import('@/pages/Video'))
const RetirementConcerns = lazy(() => import('@/pages/RetirementConcerns'))
const TwoFactorVerify = lazy(() => import('@/pages/TwoFactorVerify'))
const PageNotFound = lazy(() => import('@/pages/PageNotFound'))
const SignUp = lazy(() => import('@/pages/[auth]/SignUp'))
const SignIn = lazy(() => import('@/pages/[auth]/signin'))
const SingleSignOn = lazy(() => import('@/pages/[auth]/SSO'))
const ForgotPassword = lazy(() => import('@/pages/[auth]/ForgotPassword'))
const ResetPassword = lazy(() => import('@/pages/[auth]/ResetPassword'))
const OnboardingWizard = lazy(() => import('@/pages/OnboardingWizard'))

// End Dynamic Page Import

const App: React.FC = (props: any) => {
  const user = useSelector((state: ApplicationState) => state.auth.user)
  const token = useSelector((state: ApplicationState) => state.auth.token)
  const loadDashboard = useSelector(
    (state: ApplicationState) => state.auth.loadDashboard,
  )
  const dispatch = useDispatch()

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  useEffect(() => {
    if (user && user.role === 'user') {
      if (
        !user.passTwoFactor &&
        user.current_plan &&
        process.env.NODE_ENV === 'production'
      ) {
        props.history.push('/2fa-verify')
      } else {
        if (props.location.search.slice(0, 13) == '?success=true') {
          dispatch(verifyIdentify())
          props.history.push('/dashboard')
        } else {
          if (props.location.search.slice(0, 14) == '?success=false') {
            Toast(
              'ID verify failed',
              'Please check your information and retry.',
              'danger',
            )
            props.history.push('/verify')
          } else if (user.isSignUpProcess) {
            if (props.location.pathname.slice(1, 15) !== 'reset-password') {
              if (
                !user.disclosure_agreements?.disclosure_pdf_link &&
                ProfileCompleteStep[user.authenticate_type].indexOf(
                  '/disclosure',
                ) < user.profile_complete_step
              ) {
                props.history.push('/disclosure')
              } else {
                if (
                  ProfileCompleteStep[user.authenticate_type][
                    user.profile_complete_step
                  ] == '/dashboard'
                ) {
                  if (!loadDashboard) {
                    props.history.push(
                      ProfileCompleteStep[user.authenticate_type][
                        user.profile_complete_step
                      ],
                    )
                    dispatch(setLoadDashboard())
                  }
                } else {
                  // if(!user.disclosure_agreements && ProfileCompleteStep[user.authenticate_type].indexOf("/disclosure"))
                  props.history.push(
                    ProfileCompleteStep[user.authenticate_type][
                      user.profile_complete_step
                    ],
                  )
                }
              }
            }
          }
        }
      }
    }
  }, [user])

  useEffect(() => {
    const handleInvalidToken = (e: any) => {
      if (e.key === 'token' && e.oldValue && !e.newValue) {
        localStorage.clear()
        location.href = '/signin'
      }
    }
    window.addEventListener('storage', handleInvalidToken)

    return function cleanup() {
      window.removeEventListener('storage', handleInvalidToken)
    }
  }, [])

  return (
    <div className="font-Lato">
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/sso" component={SingleSignOn} />
          <Route exact path="/2fa-verify" component={TwoFactorVerify} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <Route exact path="/checkpoint" component={Questionnare} />
          <Route exact path="/onboarding" component={Dima} />
          <Route exact path="/video" component={Video} />
          <Route
            exact
            path="/retirement-concerns"
            component={RetirementConcerns}
          />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/our-services" component={OurServices} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/get-started" component={GetStarted} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/our-planning-process" component={Planning} />
          <Route
            exact
            path="/checkpoint-result"
            component={QuestionnaireResult}
          />
          <Route exact path="/recommendation" component={Recommendation} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Post} />

          <Route path="/test" component={OnboardingWizard} />

          <RestrictedRoute
            path={`${props.match.url}`}
            token={token}
            component={user?.role === 'user' ? MainRoute : AdminLayout}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App

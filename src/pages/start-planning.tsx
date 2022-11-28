import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProfile } from '@/store/auth/action'
import Header from '@/components/Pages/Dashboard/Header'
import PlanStep1 from '@/components/Pages/Dashboard/StartPlanning/planStep1'
import PlanStep2 from '@/components/Pages/Dashboard/StartPlanning/planStep2'
import PlanStep3 from '@/components/Pages/Dashboard/StartPlanning/planStep3'
import PlanStep4 from '@/components/Pages/Dashboard/StartPlanning/planStep4'
import PlanStep5 from '@/components/Pages/Dashboard/StartPlanning/planStep5'
import DashboardLayout from '@/layouts/DashboardLayout'

var planData: any = {}

const StartPlanning: React.FC = (props: any) => {
  const [planStep, setPlanStep] = useState<number>(0)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    let formdata = new FormData()
    Object.keys(planData).map((key) => {
      formdata.append(key, planData[key])
    })
    dispatch(addProfile(formdata))
  }
  const handleNext = (data: any) => {
    console.log(data)
    if (planStep === 4) {
      planData = { ...planData, ...data }
      handleSubmit()
    } else setPlanStep(planStep + 1)
    planData = { ...planData, ...data }
    const dBody = document.getElementById('dBody')
    if (dBody) dBody.scrollTop = 0
  }

  const handlePrev = () => {
    setPlanStep(planStep - 1)
  }

  return (
    <DashboardLayout>
      <div className="w-full relative pt-[60px] md:pt-[142px] pb-10 px-0 md:px-[60px] ">
        <Header title="Start Planning" />
        <div className="px-6 md:px-0 mt-3 md:mt-0">
          <PlanStep1 handleNext={handleNext} hidden={planStep != 0} />
          <PlanStep2
            handlePrev={handlePrev}
            handleNext={handleNext}
            hidden={planStep != 1}
          />
          <PlanStep3
            handlePrev={handlePrev}
            handleNext={handleNext}
            hidden={planStep != 2}
          />
          <PlanStep4
            handlePrev={handlePrev}
            handleNext={handleNext}
            hidden={planStep != 3}
          />
          <PlanStep5
            handlePrev={handlePrev}
            handleNext={handleNext}
            hidden={planStep != 4}
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StartPlanning

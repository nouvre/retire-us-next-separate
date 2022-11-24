import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPlan, deletePlan, getPlans, updatePlan } from '@/store/plan/action'
import { Plan, AddPriceData, UpdatePriceData } from '@/store/plan/types'
import { FillButton } from '@/components/Buttons/WhiteButtons'

import { Modal } from 'antd'
import Delete from '@2fd/ant-design-icons/lib/Delete'
import Pencil from '@2fd/ant-design-icons/lib/Pencil'
import NewPriceModal from '@/components/Pages/Admin/Stripe/NewPriceModal'
import EditPriceModal from '@/components/Pages/Admin/Stripe/EditPriceModal'
import { ApplicationState } from '@/store/index'
import AdminLayout from '@/layouts/AdminLayout'

const { confirm } = Modal

export interface Icon {
  icon: string
  icon_url: string
}

const StripeSetting: React.FC = () => {
  const dispatch = useDispatch()
  const [addModalVisible, setAddModalVisible] = useState<boolean>(false)
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false)
  const [selectedPrice, setSelectedPrice] = useState<Plan | null>(null)
  const prices = useSelector((state: ApplicationState) => state.plans.plans)

  useEffect(() => {
    dispatch(getPlans())
  }, [])

  const handleAddNewPrice = (data: AddPriceData) => {
    dispatch(addPlan(data))
    setAddModalVisible(false)
  }

  const handleUpdatePrice = (data: UpdatePriceData) => {
    dispatch(updatePlan(data))
    setEditModalVisible(false)
  }

  const handleDeletePrice = (id: number) => {
    confirm({
      title: 'Are you sure to delete this Price?',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: () => {
        dispatch(deletePlan(id))
      },
    })
  }

  return (
    <AdminLayout>
      <div className="w-full pt-20 px-5">
        <div className="w-full flex justify-end mb-3">
          <FillButton
            onClick={() => setAddModalVisible(true)}
            className="w-max py-3 px-6"
            blue
          >
            <div className="flex items-center gap-4">
              Add Plan<span>&#183;&#183;</span>
            </div>
          </FillButton>
        </div>
        <div
          className="bg-white py-[15px] px-[20px] rounded-lg"
          style={{ boxShadow: '0 1px 4px 0 #00000024' }}
        >
          <div className="py-3 text-lg font-semibold">Prices</div>
          {prices.map((price, index) => (
            <div
              className="w-full border flex border-gray-300 rounded-xl text-xl p-2 my-3"
              key={index}
            >
              <div className="w-10/12 max-w-[calc(100%-100px)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
                  <div>
                    <div className="font-semibold w-full">ID</div>
                    <div>{price.id}</div>
                  </div>
                  <div>
                    <div className="font-semibold w-full">Title</div>
                    <div>{price.title}</div>
                  </div>
                  <div>
                    <div className="font-semibold w-full">Amount</div>
                    <div>{price.amount}</div>
                  </div>
                  <div>
                    <div className="font-semibold w-full">Time Created</div>
                    <div className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                      {price.created_at}
                    </div>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="font-semibold w-full">Plan ID</div>
                  <div className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                    {price.plan_id}
                  </div>
                </div>
              </div>
              <div className="w-2/12 h-full min-w-[100px] flex justify-end">
                <button
                  className="bg-[#87d068] text-white outline-none rounded-full flex justify-center items-center w-10 h-10 mr-2 text-lg"
                  onClick={() => {
                    setSelectedPrice(price)
                    setEditModalVisible(true)
                  }}
                >
                  <Pencil />
                </button>
                <button
                  className="bg-[#f50] text-white outline-none rounded-full flex justify-center items-center w-10 h-10 text-lg"
                  onClick={() => handleDeletePrice(price.id)}
                >
                  <Delete />
                </button>
              </div>
            </div>
          ))}
        </div>

        <NewPriceModal
          visible={addModalVisible}
          CloseModal={() => setAddModalVisible(false)}
          handleSubmit={handleAddNewPrice}
        />
        <EditPriceModal
          formdata={selectedPrice}
          visible={editModalVisible}
          CloseModal={() => setEditModalVisible(false)}
          handleSubmit={handleUpdatePrice}
        />
      </div>
    </AdminLayout>
  )
}

export default StripeSetting

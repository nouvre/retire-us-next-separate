import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail } from '@/store/setting/action'
import { ApplicationState } from '@/store/index'
import Questionnaire from '@/components/Pages/Admin/UserDetail/Questionnaire'
import Document from '@/components/Pages/Admin/UserDetail/Document'
import Planning from '@/components/Pages/Admin/UserDetail/Planning'
import Flags from '@/components/Pages/Admin/UserDetail/Flags'
import TodoList from '@/components/Pages/Admin/UserDetail/TodoList'
import QuickView from '@/components/Pages/Admin/UserDetail/QuickView'
import Assign from '@/components/Pages/Admin/UserDetail/Assign'
import IdInfo from '@/components/Pages/Admin/UserDetail/IdInfo'
import Goal from '@/components/Pages/Admin/UserDetail/Goal'
import DynamicList from '@/components/Pages/Admin/UserDetail/DynamicList'
import Image from '@/components/common/Image'
import AdminLayout from '@/layouts/AdminLayout'
import { useRouter } from 'next/router'

const UserDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [curItem, setCurItem] = useState<string>('Questionnaire')
  const dispatch = useDispatch()
  const selectedUser = useSelector(
    (state: ApplicationState) => state.settings.selectedUser,
  )

  useEffect(() => {
    dispatch(getUserDetail(id))
  }, [])

  return (
    <AdminLayout>
      <div
        className="flex w-full h-[calc(100vh-7rem)] mt-20 bg-white rounded-lg bg-gradient-to-r from-[#3F68E4] to-[#5EC4F7]"
        style={{ boxShadow: '0 1px 4px 0 #00000024' }}
      >
        <div className="w-[14rem] flex flex-none justify-between flex-col gap-1 p-5 py-10">
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Questionnaire' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Questionnaire') : null
            }
          >
            <Image
              src="../assets/images/icon-question.svg"
              alt="Questionnaire"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Checkpoint</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Planning' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Planning') : null
            }
          >
            <Image
              src="../assets/images/icon-plan.svg"
              alt="Planning"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Planning Results</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Flags' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Flags') : null
            }
          >
            <Image
              src="../assets/images/icon-flag.svg"
              alt="Flags"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Flags</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Documents' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Documents') : null
            }
          >
            <Image
              src="../assets/images/icon-doc.svg"
              alt="Documents"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Documents</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'todo' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('todo') : null
            }
          >
            <Image
              src="../assets/images/icon-todo.svg"
              alt="To-Do"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">To-Do List</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'dynamicList' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('dynamicList') : null
            }
          >
            <Image
              src="../assets/images/icon-info.svg"
              alt="Info"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Dynamic List</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Goal' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Goal') : null
            }
          >
            <Image
              src="../assets/images/icon-goal.svg"
              alt="Goal"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Goal Update</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'quickView' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('quickView') : null
            }
          >
            <Image
              src="../assets/images/icon-quick.svg"
              alt="Goal"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Quick View</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'Assign' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('Assign') : null
            }
          >
            <Image
              src="../assets/images/icon-assign.svg"
              alt="Goal"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">Assign Rep</span>
          </div>
          <div
            className={`w-full flex items-center justify-start p-[10px] py-1 gap-3 rounded-xl cursor-pointer ${
              curItem == 'idInfo' ? 'bg-white bg-opacity-20' : null
            }`}
            onClick={() =>
              selectedUser?.role == 'user' ? setCurItem('idInfo') : null
            }
          >
            <Image
              src="../assets/images/icon-id.svg"
              alt="Goal"
              className="w-5 h-5"
            />
            <span className="text-lg text-[#FFFFFF]">ID Info</span>
          </div>
        </div>
        <div className="flex-grow flex flex-col bg-[#EEF1F8] rounded-tl-[32px] rounded-bl-[32px] py-5">
          <div className="w-full flex mb-4 justify-center">
            <div className="text-3xl mr-36 px-5 whitespace-nowrap">
              {selectedUser?.name}
            </div>
            <div className="text-3xl">{selectedUser?.email}</div>
          </div>
          {curItem == 'Questionnaire' ? (
            <Questionnaire />
          ) : curItem == 'Documents' ? (
            <Document />
          ) : curItem == 'Planning' ? (
            <Planning userId={id} />
          ) : curItem == 'Flags' ? (
            <Flags />
          ) : curItem == 'todo' ? (
            <TodoList />
          ) : curItem == 'quickView' ? (
            <QuickView />
          ) : curItem == 'idInfo' ? (
            <IdInfo />
          ) : curItem == 'Goal' ? (
            <Goal />
          ) : curItem == 'dynamicList' ? (
            <DynamicList />
          ) : curItem == 'Assign' ? (
            <Assign />
          ) : null}
        </div>
      </div>
    </AdminLayout>
  )
}

export default UserDetail

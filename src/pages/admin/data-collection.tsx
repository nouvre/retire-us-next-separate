import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'antd'
import Delete from '@2fd/ant-design-icons/lib/Delete'
import LeadPencil from '@2fd/ant-design-icons/lib/LeadPencil'

import { ApplicationState } from '@/store/index'
import {
  addDataCollectionField,
  getDataCollectionFields,
  updateDataCollectionField,
  deleteDataCollectionField,
} from '@/store/setting/action'
import { DataCollectionField } from '@/store/setting/types'
import DataCollectionModal from '@/components/Pages/Admin/DataCollection/DataCollectionModal'
import { FillButton } from '@/components/Buttons/WhiteButtons'
import AdminLayout from '@/layouts/AdminLayout'

const { confirm } = Modal

const DataCollection: React.FC = () => {
  const dispatch = useDispatch()
  const DataCollectionFields = useSelector(
    (state: ApplicationState) => state.settings.dataCollectionFields,
  )
  const [visible, setVisible] = useState<boolean>(false)
  const [formdata, setFormData] = useState<DataCollectionField | null>(null)
  useEffect(() => {
    dispatch(getDataCollectionFields())
  }, [])

  const save = (e) => {
    let array = e.title.split(' ')
    array = array.map((element) => {
      return element.toLocaleLowerCase()
    })
    e.key = array.join('_')

    if (e.id) {
      dispatch(updateDataCollectionField(e))
    } else {
      dispatch(addDataCollectionField(e))
    }
    setVisible(false)
  }

  const openAddModal = () => {
    setFormData(null)
    setVisible(true)
  }

  const deleteField = (id) => {
    confirm({
      title: 'Are you sure you want to delete this file?',
      okText: 'Delete',
      okType: 'danger',
      onOk: () => {
        dispatch(deleteDataCollectionField(id))
      },
    })
  }

  const openEditModal = (formdata: DataCollectionField) => {
    setFormData(formdata)
    setVisible(true)
  }

  return (
    <AdminLayout>
      <div className="w-full pt-20 px-5">
        <div className="w-full bg-white rounded-lg p-5">
          <div className="w-full md:w-[980px] max-w-full overflow-x-scroll text-lg min-h-full">
            <div className="w-full flex justify-between py-5">
              <div className="text-2xl font-semibold">Data Collection</div>
              <FillButton
                onClick={() => openAddModal()}
                className="w-max py-3 px-6"
                blue
              >
                <div className="flex items-center gap-4">
                  Add Document<span>&#183;&#183;</span>
                </div>
              </FillButton>
            </div>
            <table className="w-full">
              <thead>
                <tr className="text-xl">
                  <th className="w-4/12 py-3 text-left">Title</th>
                  <th className="w-4/12 py-3 text-left">Key</th>
                  <th className="w-1/12 py-3 text-center">Multiple</th>
                  <th className="w-1/12 py-3 text-center">Require</th>
                  <th className="w-2/12 py-3 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {DataCollectionFields.map((field, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2">{field.title}</td>
                    <td className="py-2">{field.key}</td>
                    <td className="text-center py-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-[#0A2C75] border border-[#0A2C7535]"
                        name="multiple"
                        checked={field.multiple}
                        readOnly
                      />
                    </td>
                    <td className="text-center py-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-[#0A2C75] border border-[#0A2C7535]"
                        name="multiple"
                        checked={field.require}
                        readOnly
                      />
                    </td>
                    <td>
                      <div className="w-full h-full flex justify-evenly items-center">
                        <button
                          className="w-8 h-8 rounded-full bg-[#87cf68] text-white text-lg flex justify-center items-center"
                          onClick={() => openEditModal(field)}
                        >
                          <LeadPencil />
                        </button>
                        <button
                          className="w-8 h-8 rounded-full bg-[#ff5400] text-white text-lg flex justify-center items-center"
                          onClick={() => {
                            deleteField(field.id)
                          }}
                        >
                          <Delete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <DataCollectionModal
          visible={visible}
          formdata={formdata}
          handleSubmit={save}
          closeModal={() => setVisible(false)}
        />
      </div>
    </AdminLayout>
  )
}

export default DataCollection

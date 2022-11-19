import React, { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Check from "@2fd/ant-design-icons/lib/Check";
import ChevronUp from "@2fd/ant-design-icons/lib/ChevronUp";
import ChevronDown from "@2fd/ant-design-icons/lib/ChevronDown";

const items = [
    { id: "Alabama", name: "Alabama" },
    { id: "Alaska", name: "Alaska" },
    { id: "Arizona", name: "Arizona" },
    { id: "Arkansas", name: "Arkansas" },
    { id: "California", name: "California" },
    { id: "Colorado", name: "Colorado" },
    { id: "Connecticut", name: "Connecticut" },
    { id: "Delaware", name: "Delaware" },
    { id: "Florida", name: "Florida" },
    { id: "Georgia", name: "Georgia" },
    { id: "Hawaii", name: "Hawaii" },
    { id: "Idaho", name: "Idaho" },
    { id: "Illinois", name: "Illinois" },
    { id: "Indiana", name: "Indiana" },
    { id: "Iowa", name: "Iowa" },
    { id: "Kansas", name: "Kansas" },
    { id: "Kentucky", name: "Kentucky" },
    { id: "Louisiana", name: "Louisiana" },
    { id: "Maine", name: "Maine" },
    { id: "Maryland", name: "Maryland" },
    { id: "Massachusetts", name: "Massachusetts" },
    { id: "Michigan", name: "Michigan" },
    { id: "Minnesota", name: "Minnesota" },
    { id: "Mississippi", name: "Mississippi" },
    { id: "Missouri", name: "Missouri" },
    { id: "Montana", name: "Montana" },
    { id: "Nebraska", name: "Nebraska" },
    { id: "Nevada", name: "Nevada" },
    { id: "New Hampshire", name: "New Hampshire" },
    { id: "New Jersey", name: "New Jersey" },
    { id: "New Mexico", name: "New Mexico" },
    { id: "New York", name: "New York" },
    { id: "North Carolina", name: "North Carolina" },
    { id: "North Dakota", name: "North Dakota" },
    { id: "Ohio", name: "Ohio" },
    { id: "Oklahoma", name: "Oklahoma" },
    { id: "Oregon", name: "Oregon" },
    { id: "Pennsylvania", name: "Pennsylvania" },
    { id: "Rhode Island", name: "Rhode Island" },
    { id: "South Carolina", name: "South Carolina" },
    { id: "South Dakota", name: "South Dakota" },
    { id: "Tennessee", name: "Tennessee" },
    { id: "Texas", name: "Texas" },
    { id: "Utah", name: "Utah" },
    { id: "Vermont", name: "Vermont" },
    { id: "Virginia", name: "Virginia" },
    { id: "Washington", name: "Washington" },
    { id: "West Virginia", name: "West Virginia" },
    { id: "Wisconsin", name: "Wisconsin" },
    { id: "Wyoming", name: "Wyoming" },
];

export const StateCheckbox = ({ onChange }: { onChange: (e) => void }) => {
    const [selected, setSelected] = useState(items[0])
    const [query, setQuery] = useState('')

    const filteredItems =
        query === ''
            ? items
            : items.filter((item) =>
                item.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    const handleChange = (e) => {
        setSelected(e);
        onChange(e);
    }
    return (
        <Combobox value={selected} onChange={handleChange}>
            <div className="relative mt-1">
                <div className="relative w-full h-11 text-left bg-white rounded-lg shadow-md border border-gray-400 focus:outline-none sm:text-sm overflow-hidden">
                    <Combobox.Input
                        className="w-full border-none focus-visible:outline-none py-[11px] pl-3 pr-10 text-sm leading-5 text-gray-900"
                        displayValue={(item: any) => item.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex flex-col justify-center items-center pr-2">
                        <ChevronUp
                            className="text-gray-400"
                            aria-hidden="true"
                        /><ChevronDown
                            className="text-gray-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leavehref="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-300 rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm">
                        {filteredItems.length === 0 && query !== '' ? (
                            <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                        ) : (
                            filteredItems.map((item) => (
                                <Combobox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-black bg-teal-600' : 'text-gray-600'
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {item.name}
                                            </span>
                                            {selected ? (
                                                <Check className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-black' : 'text-teal-600'
                                                    }`} aria-hidden="true" />
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    );
};

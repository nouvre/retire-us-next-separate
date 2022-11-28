import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Toast } from "@/components/common/notification";
import { ApplicationState } from "@/store/index";
import { enableTodoList } from "@/store/setting/action";
var initIds: Array<number>;

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(
        (state: ApplicationState) => state.settings.selectedUser
    );
    const [enabledIds, setEnabledIds] = useState<Array<number>>([]);

    useEffect(() => {
        console.log("selected user=>", selectedUser);
        if (!selectedUser) return;
        initIds = [];
        if (selectedUser.profile || selectedUser.todos[0].completed == "E")
            initIds.push(1);
        if (
            ((selectedUser.profile || selectedUser.todos[0].completed == "E") &&
                selectedUser.whealth_concierge_meet) ||
            selectedUser.todos[1].completed == "E"
        )
            initIds.push(2);
        if (
            ((selectedUser.profile || selectedUser.todos[0].completed == "E") &&
                selectedUser.rep_id &&
                selectedUser.whealth_concierge_meet) ||
            selectedUser.todos[2].completed == "E"
        )
            initIds.push(3);
        if (selectedUser.todos[3].completed == "E")
            initIds.push(4);
        if (
            selectedUser.id_verified ||
            selectedUser.todos[4].completed == "E" ||
            selectedUser.todos[4].completed == "Y"
        )
            initIds.push(5);
        if (selectedUser.todos[5].completed == "E") initIds.push(6);

        setEnabledIds(initIds);
    }, [selectedUser]);

    const save = () => {
        // let newIds = enabledIds.filter(id=>{
        //     return initIds.find(i=>i==id)?false: true;
        // })

        // if(!newIds.length){
        //     Toast("", "You didn't check any new item yet.", "danger");
        //     return;
        // }
        dispatch(enableTodoList(selectedUser?.id, enabledIds));
    };

    const clickTodo = (id) => {
        // if(initIds.find(d=>d==id))
        //     return;
        if (enabledIds.find((d) => d == id)) {
            console.log("exist");
            setEnabledIds(enabledIds.filter((d) => d != id));
        } else {
            setEnabledIds([...enabledIds, id]);
        }
    };

    return (
        <Scrollbars>
            <div className="w-full flex flex-col gap-16 justify-center items-center pt-2 px-5 h-full">
                <div className="flex flex-col gap-3">
                    {selectedUser?.todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex gap-2 items-center text-2xl"
                        >
                            <input
                                type="checkbox"
                                name={todo.name}
                                id={todo.name}
                                className={`w-4 h-4 border-2 border-[#00BB7A]  form-checkbox ${
                                    enabledIds.find((id) => id == todo.id)
                                        ? "text-[#00BB7A] bg-[#00BB7A]"
                                        : "text-[#fff] bg-[#fff]"
                                } rounded-full`}
                                onChange={() => clickTodo(todo.id)}
                                checked={
                                    enabledIds.find((id) => id == todo.id)
                                        ? true
                                        : false
                                }
                                disabled={todo.id == 5}
                            />
                            <label htmlFor={todo.name}>{todo.name}</label>
                        </div>
                    ))}
                </div>
                <div className={`w-full py-[16px] flex justify-center gap-8`}>
                    <button
                        className={`text-[18px] font-bold border-2 border-[#001F55] text-[#001F55] hover:bg-[#173A78] hover:text-white whitespace-nowrap px-[24px] py-[12px] rounded-full
                                    flex items-center justify-center h-[60px] min-w-[160px]`}
                        onClick={() => {
                            setEnabledIds(initIds);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="text-white text-[18px] font-bold bg-[#001F55] hover:bg-[#173A78] whitespace-nowrap px-[24px] py-[12px] rounded-full
                                        h-[60px] min-w-[160px]"
                        onClick={() => save()}
                    >
                        Save&nbsp;&nbsp;&#183;&#183;
                    </button>
                </div>
            </div>
        </Scrollbars>
    );
};

export default TodoList;

import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';

export default function Todos() {
    const [task, setTask] = useState('');
    const [data, setData] = useState([]);
    const [togglebtn, setTogglebtn] = useState(true);
    const [editItem, setEditItem] = useState(null)
    const [activeTab, setActiveTab] = useState("All")
    const [msg, setMsg] = useState('')

    useEffect(() => {
        let getdata = JSON.parse(localStorage.getItem('key'))
        if (getdata) { setData(getdata) }
    }, [])

    const AddTodo = (e) => {
        e.preventDefault()
        if (task.trim().length >= 4) {
            if (!togglebtn) {
                let edt = data.map((elem) => {
                    if (elem.id === editItem) {
                        return { ...elem, name: task }
                    }
                    return elem;
                })
                setData(edt)
                setTogglebtn(true)
                setTask('')
                localStorage.setItem('key', JSON.stringify(edt))
                setMsg('')
            }

            else if (togglebtn) {
                let newAry = [...data]
                e.preventDefault()
                const newData = {
                    name: task,
                    id: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100),
                    isDone: false
                }
                newAry?.push(newData)
                setData(newAry)
                setTask(' ')
                localStorage.setItem('key', JSON.stringify(newAry))
                setMsg('')
            }
            setTogglebtn(true)
        } else { setMsg('Enter Valid Todo') }
    }

    const All = () => {
        setMsg('')
        setActiveTab("All")
    }

    const Done = () => {
        setMsg('')
        setActiveTab("Done")
    }

    const Todo = () => {
        setMsg('')
        setActiveTab("Todo")
    }

    const Check = (e, item) => {
        const value = e.target.checked
        const newdata = data.map((elem) => {
            if (elem.id === item.id) {
                elem = { ...elem, isDone: value }
            }
            return elem
        })
        localStorage.setItem("key", JSON.stringify(newdata))
        setData(newdata)
        setMsg('')
    }

    const Edit = (item) => {
        let newedititem = data.find((elem) => {
            return elem.id === item.id
        });
        setTask(newedititem.name)
        setEditItem(item.id)
        setTogglebtn(false)
        setMsg('')
    }

    const Delete = (del) => {
        let newAry = data.filter((i) => i.id !== del.id)
        setData(newAry)
        localStorage.setItem("key", JSON.stringify(newAry))
        setMsg('')
    }

    const DeleteDone = () => {
        let getdata = JSON.parse(localStorage.getItem('key'))
        if (getdata) { setData(getdata) }
        console.log(getdata)
        const donedata = []
        getdata.map((elem) => {
            if (elem.isDone == !true) {
                let elem1 = { ...elem }
                donedata.push(elem1)
            }
        })
        setData(donedata)
        localStorage.setItem('key', JSON.stringify(donedata))
        setMsg('')
    }

    const DeleteAll = () => {
        let newAry = []
        setData(newAry)
        localStorage.setItem("key", JSON.stringify(newAry))
        setMsg('')
    }

    const renderItem = (state) => {
        return state.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-10'>
                                {item.name}
                            </div>
                            <div className='col-sm-2'>
                                <input type="checkbox" className="" checked={item.isDone} onChange={(e) => Check(e, item)} />

                                <button className="Edit" onClick={() => Edit(item)}><MdModeEdit style={{ color: 'orange' }} /></button>

                                <button className="Delete" onClick={() => Delete(item)}><FaTrash style={{ color: 'red' }} /></button>
                            </div><hr />
                        </div>
                    </div>
                </React.Fragment>
            )
        })

    }

    const ifElse = () => {
        if (activeTab === "All") {
            return renderItem(data)
        }
        else {
            if (activeTab === "Todo") {
                return renderItem(data.filter(i => i.isDone === false))
            }
            else {
                return renderItem(data.filter(i => i.isDone === true))
            }
        }
    }

    return (
        <div className='body'>
            <div className='container my-3'>
                <p className='TodoInput'>TodoInput</p>
                <form className='AddTodo' onSubmit={AddTodo} >
                    <div>
                        <input className='form-control' placeholder="Enter Here" value={task.trim()} onChange={(e) => setTask(e.target.value)} /><div className='msg'>{msg}</div><br />
                    </div>
                    {
                        togglebtn ? <button type="submit" className="addbtn" value={task}>Add Todo</button> :
                            <button type="submit" className="addbtn" value={task} ><MdModeEdit style={{ color: 'orange' }} /></button>
                    }
                </form>
            </div>

            <div className='container' >
                <h4 className='todolist'>Todos List</h4>
                <div >
                    <div className='Allbtn' >
                        <button className="All" onClick={() => All()}>All</button>
                        <button className="All" onClick={() => Done()}> Inactive</button>
                        <button className="All" onClick={() => Todo()}>Active</button>
                    </div>
                </div><br />
            </div>

            <div className='rowtext'>
                {ifElse()}
                {/* {activeTab==="All" ? renderItem(data) : activeTab==="Todo" ? renderItem(data.filter(i=>i.isDone===false)) : renderItem(data.filter(i=>i.isDone===true))} */}
            </div>

            <div className='footer'>
                <button className='deletedonetask' onClick={DeleteDone} >Delete Un-Active task</button>
                <button className='deletedonetask' onClick={DeleteAll} >Delete all task</button>
            </div>
        </div>
    )
}
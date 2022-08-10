import { React, useState } from 'react';
import SetStudents from '../students-data/SetStudents'
import { useDispatch, useSelector } from "react-redux";
import { setStudentData, updataStudentValue } from "../../redux/studentsSlice"
import { v4 as uuidv4 } from 'uuid';

function StudentForm() {

    // const Input = ({placeholder,name,value,htmlFor,label}) => (

    //     <div className="entry_data">
    //      <label htmlFor={htmlFor}> {label} </label>
    //         <input
    //             type="text"
    //             placeholder={placeholder}
    //             name={name}
    //             onChange={handleChange}
    //             value={value}
    //         />
    //     </div>
    // )

    const dispatch = useDispatch()
    const { students  } = useSelector(state => state.students);

    const [update, setUpdate] = useState(false);
    const [disableButton,setDisableButton] = useState(false);
    const initialItem = { name_ar: '', name_en: '', stage: '', section: '', email: '', notes: '' };
    const [data, setData] = useState(initialItem);

// ====== onChange function ======
    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

// ====== onsubmit function  =======
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setStudentData({ data: data, id: uuidv4() }));
        setData(initialItem)
    }

// ====== edit function  =======
    const editStudent = (id) => {
        const findStudent = students.find(student => student.id === id);
        console.log(findStudent);
        if (findStudent) {
            const { name_ar, name_en, stage, section, notes, email } = findStudent.data;
            setData({
                name_ar: name_ar,
                name_en: name_en,
                stage: stage,
                section: section,
                notes: notes,
                email: email
            });
        }
        setUpdate(true)
        setDisableButton(true);
    }

// ====== upData function  =======
    const updataValues = (id) => {
        const findStudent = students.find(student => student.id === id);
        console.log(findStudent);
        dispatch(updataStudentValue(
            { data: data, id: id }
        ));
        setData(initialItem)
        setUpdate(false)

    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className="form">


                {/* <Input name='name_ar' value={data.name_ar} placeholder='الاسم باللغه العربيه'/> */}

                <div className="entry_data">
                    <label htmlFor='name_ar'> الاسم باللغه العربيه :</label>
                    <input
                        type="text"
                        placeholder='الاسم باللغه العربيه'
                        name='name_ar'
                        onChange={handleChange}
                        value={data.name_ar}
                        required
                    />
                </div>

                <div className="entry_data">
                <label htmlFor='name_en'> الاسم باللغه الانجليزيه</label>
                    <input
                        type="text"
                        placeholder='الاسم باللغه الانجليزيه'
                        name='name_en'
                        onChange={handleChange}
                        value={data.name_en}
                        required
                    />
                </div >

                <div className="entry_data">
                <label htmlFor='stage'> المرحلة</label>

                    <input
                        type="text"
                        placeholder='المرحله'
                        name='stage'
                        onChange={handleChange}
                        value={data.stage}
                        required
                    />
                </div>
                <div className="entry_data">
                <label htmlFor='section'> القسم </label>

                    <input
                        type="text"
                        placeholder='القسم '
                        name='section'
                        onChange={handleChange}
                        value={data.section}
                        required
                    />
                </div>
                <div className="entry_data">
                <label htmlFor='email'> البريد الالكتروني</label>

                    <input
                        type="text"
                        placeholder='البريد الالكتروني'
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                </div>
                <div className="entry_data">
                <label htmlFor='notes'>  الملاحظات </label>

                    <textarea
                        type="text"
                        placeholder='الملاحظات'
                        name='notes'
                        onChange={handleChange}
                        value={data.notes}
                        rows="4" 
                        cols="50" 
                        maxLength="200"
                         
                    />
                </div>
                <div className="form_button_submit">
                     <button disabled={update? "disabled":null} type='submit'> ادخل البيانات</button>
                </div>
            </form>

            <SetStudents editStudent={editStudent} updataValues={updataValues} disableButton={disableButton} />
        </div>
    )
}

export default StudentForm
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from '../../redux/studentsSlice'

export default function SetStudents({ editStudent, updataValues,disableButton }) {
  const dispatch = useDispatch();
  const { students } = useSelector(state => state.students);
  const { loading } = useSelector(state => state.students);

  console.log(loading)

  return (
    <div>
      {/* map data from state */}

      {
        students && students.map((student) => (
          <>
            <div key={student.id}>
              {loading ?
                <p>تحميل...</p> :
                <div className='set_user_data'>
                  <div>
                  <p><span>الاسم باللغة العربية</span>: {student.data.name_en}</p>
                  <p><span>الاسم باللغة الانجليزية</span>: {student.data.name_ar}</p>
                  <p><span>البريد الالكتروني</span>: {student.data.email}</p>
                  <p> <span>القسم</span>: {student.data.section}</p>
                  <p><span>المرحلة</span>: {student.data.stage}</p>
                  <p><span>الملاحظات</span>: {student.data.notes}</p>
                  </div>

                  <div className='buttons_modfiy'>
                  <button onClick={() => editStudent(student.id)}>تعديل</button>

                  <button disabled={disableButton?null:"disabled"} onClick={() => updataValues(student.id)}>تحديث</button>
                  <button onClick={() => delete (dispatch(deleteStudent(student.id)))}>حذف</button>
                  </div>
                
                  <hr/>
                </div>
              }      
            </div>
          </>
        ))}
    </div>
  )
}

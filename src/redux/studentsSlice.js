import { createSlice } from "@reduxjs/toolkit";

const StudentsSlice = createSlice({
    name: 'Student',
    initialState: {
        students: [],
        loading: true,
        disableButton: false
    },

    reducers: {
        // push student data
        setStudentData: (state, action) => {
            state.loading = false
         state.students.push(action.payload)
 
         },

        //  delete students 
         deleteStudent: (state, action) => {
            state.students= state.students.filter(student => student.id !== action.payload)
 
         },

       //   update student data
         updataStudentValue: (state, action) => {
            const{name_ar,name_en,stage,section,notes,email} = action.payload.data

            state.students.forEach(student => {
                if(student.id===action.payload.id){
                    student.data.name_ar = name_ar
                    student.data.name_en = name_en
                    student.data.stage   = stage
                    student.data.section = section
                    student.data.notes   = notes
                    student.data.email   = email
                }
            } );
 
         },
      
         
    }
});
export const {
    
    setStudentData,
    deleteStudent,
    updataStudentValue,
     
    
} = StudentsSlice.actions;
export default StudentsSlice.reducer;

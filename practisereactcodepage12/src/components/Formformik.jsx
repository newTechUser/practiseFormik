import React from 'react'
import './Form.css'
import {Formik,Form,Field} from "formik"


function Formformik() {
  return (

    <>
    <Formik
            initialValues={{
              ad:'',
              soyad:'',
              prefix:['050'],
              nomre:'',
              movzu:["Kiber"],
              qeyd:''
            }}
            onSubmit={values=>{
              console.log(values);
            }}
    >

   
    {
      <>
        <p className="titletext">
        Sizə zəng edək
        </p>
        <p className="maintext">
            Operator ilə danışaraq siz akademiya və tədris proqramları haqqında ilkin məlumatları əldə <br/>
            edə və digər suallarınızı ünvanlaya bilərsiniz.
        </p>
        <div className="container">
            <div className="photo">
                <img className='image' src="https://code.edu.az/wp-content/uploads/2021/10/kod-akademiya-muraciet-et.jpeg" alt="" />
            </div>
            <div className="formside">
                <Form>
                      <Field placeholder="Ad" className="textinput" name="ad"/>
                      <Field placeholder="Soyad" className="textinput" name="soyad"/><br/><br/>
                      <Field className="select" component="select" name="prefix">
                                <option value='050'>050</option>
                                <option value='051'>051</option>
                                <option value='055'>055</option>
                                <option value='070'>070</option>
                                <option value='077'>077</option>
                                <option value='099'>099</option>
                      </Field> 
                      <Field placeholder="XXX-XX-XX" className="number" name="nomre"/><br/><br/>

                      <Field className="selectsub" component="select" name="movzu">
                                <option value='Kiber'>Kiber</option>
                                <option value='Fullstack'>Fullstack</option>
                                <option value='Designer'>Designer</option>
                      </Field><br/><br/>
                      <Field placeholder="elave qeyd" className="note" name="qeyd"/><br/><br/>

                      <div className="btn">
                        <button className='Btn' type="Submit">Send</button>
                      </div>
                </Form>
            </div>
        </div>
      </>
    }

    </Formik>
    </>

  )
}

export default Formformik
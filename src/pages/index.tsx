import { FormikHelpers } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { CustomError, MagicForm } from "../components/form";
import { FormTextField } from "../components/form/FormTextField";
interface Props {}

const initVal = {
  name: "",
  age: 10,
  cls: "",
};

type InitVal = typeof initVal;

const msg = "NOT VALID!";
const validationSchema = yup.object().shape({
  name: yup.string().required(msg).min(3, msg).max(5, msg),
  age: yup.number().required(msg).min(3, msg).max(5, msg),
});

const Home = (props: Props) => {
  const onSubmit = (val: InitVal, helper: FormikHelpers<InitVal>) => {
    console.log(val);
  };

  const [customError] = useState<CustomError<InitVal>>(null);

  return (
    <div className="p-10">
      <div style={{ width: 300 }}>
        <MagicForm
          initialValues={initVal}
          onSubmit={onSubmit}
          customError={customError}
          validationSchema={validationSchema}
        >
          <FormTextField name="name" label="이름" />
          <FormTextField name="cl" label="클래스" />
        </MagicForm>
      </div>
    </div>
  );
};

export default Home;

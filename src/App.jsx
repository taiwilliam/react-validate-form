import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import TextField from "./components/TextField";
import name_validation from "./components/utils/name_validation";
import phone_validation from "./components/utils/phone_validation";
import email_validation from "./components/utils/email_validation";

function App() {
  const methods = useForm();
  const [data, setData] = useState({});
  const isLoading = false;

  const onSubmit = methods.handleSubmit((formData) => {
    setData(JSON.stringify(formData));
    console.log(data);
  });

  return (
    <div className='App'>
      <div className='container'>
        <h1>Foodnd 外送師培訓申請</h1>

        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate //禁用原生默認驗證行為
          >
            <TextField
              {...name_validation}
              disabled={isLoading}
              className='mb-3'
            />
            <TextField
              {...email_validation}
              disabled={isLoading}
              className='mb-3'
            />
            <TextField
              {...phone_validation}
              disabled={isLoading}
              className='mb-3'
            />

            <button className='btn' onClick={onSubmit}>
              傳送
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;

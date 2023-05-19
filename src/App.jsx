import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TextField from "./components/TextField";

function App() {
  const methods = useForm();
  const [data, setData] = useState({});

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
              label='姓名'
              name='name'
              id='name'
              className='mb-3'
              placeholder='報上名來'
              validation={{
                required: {
                  value: true,
                  message: "嘿嘿嘿，快告訴我你的名子",
                },
              }}
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

import React from "react";
import { useFormContext } from "react-hook-form";
import findInputError from "./utils/findInputError";
import isFormInvalid from "./utils/isFormInvalid";

export default function TextField({
  id = "demo", // input屬性
  name = "", // input屬性
  type = "text", // input屬性
  disabled = false, // input屬性
  readOnly = false, // input屬性

  label = "", // 顯示用 label title
  placeholder = "", // 顯示用 預輸入文字
  className = "", // 自訂義class 標籤

  validation = "", // 驗證器規則
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // 透過useFormContext 獲取父層方法及資料

  // 雖然我們可以獲取錯誤資訊，但錯誤資訊為整個form的錯誤需要再進行邏輯處理
  const inputError = findInputError(errors, name);
  // 並且根據錯誤訊息的有無 判斷該組件是否要顯示錯誤訊息
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className={`text-field ${className}`}>
      <div className='text-field__header'>
        <label htmlFor={id} className='text-field__header__label'>
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className={`text-field__input${isInvalid ? " active" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...register(name, validation)}
      />
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
    </div>
  );
}

const InputError = ({ message }) => {
  return <div className='text-danger fs-xs'>{message}</div>;
};

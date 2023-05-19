import React from "react";

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
  const isInvalid = false; // 是否為錯誤的

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
        // {...register(name, validation)}
      />
    </div>
  );
}

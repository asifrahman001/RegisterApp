import React, { SyntheticEvent, useState } from "react";
import styles from "./style.module.css";

type RegisterProps = {
  appName: string;
  title: string;
  subTitle: string;
};

type ElementType = {
  id: string;
  label: string;
  value: string | number;
  inputType: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Register = (props: RegisterProps) => {
  const { title, subTitle, appName } = props;
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };
  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const onChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const FORM_ELEMENTS = [
    {
      id: "fullname",
      value: name,
      label: "Full Name",
      inputType: "text",
      onChange: onChangeName,
    },
    {
      id: "company_name",
      value: companyName,
      label: "Company Name",
      inputType: "text",
      onChange: onChangeCompanyName,
    },
    {
      id: "age",
      value: age,
      label: "Age",
      inputType: "number",
      onChange: onChangeAge,
    },
    {
      id: "contact",
      value: contact,
      label: "Contact",
      inputType: "number",
      onChange: onChangeContact,
    },
  ];

  const onSubmit = () => {
    const payload = {
      name,
      age,
      companyName,
      contact,
    };
    // call api to register
  };

  return (
    <div>
      <div className={styles.appName}>{appName}</div>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
        </div>
        <div>
          {FORM_ELEMENTS.map((item: ElementType) => (
            <div key={item.id} className={styles.formElement}>
              <label htmlFor={item.id}>{item.label}: </label>
              <input
                type={item.inputType}
                id={item.id}
                value={item.value}
                onChange={item.onChange}
              />
            </div>
          ))}
        </div>
        <button onClick={onSubmit}>Register</button>
      </div>
    </div>
  );
};

export default Register;

import { ChangeEvent, FormEvent, useReducer } from "react";

import "./style.css";

interface State {
  firstName: { value: string; error: string | null };
  lastName: { value: string; error: string | null };
  emailAddress: { value: string; error: string | null };
  password: { value: string; error: string | null };
  confirmPassword: { value: string; error: string | null };
  successMsg: { value: string };
}

type Action =
  | { type: "HANDLE_INPUT_CHANGE"; field: string; payload: string }
  | { type: "HANDLE_ERROR_CHANGE"; field: string; payload: string };

const initialData: State = {
  firstName: { value: "", error: null },
  lastName: { value: "", error: null },
  emailAddress: { value: "", error: null },
  password: { value: "", error: null },
  confirmPassword: { value: "", error: null },
  successMsg: { value: "" },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGE":
      return {
        ...state,
        [action.field]: { value: action.payload, error: null },
      };
    case "HANDLE_ERROR_CHANGE":
      return {
        ...state,
        successMsg: { value: "" },
        [action.field]: {
          value: (state as any)[action.field].value,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialData);

  const handleValidation = () => {
    let error = false;

    if (state.firstName.value.trim().length < 3) {
      dispatch({
        type: "HANDLE_ERROR_CHANGE",
        field: "firstName",
        payload: "First Name should be at least 3 characters long",
      });
      error = true;
    }

    if (state.lastName.value.trim().length < 3) {
      dispatch({
        type: "HANDLE_ERROR_CHANGE",
        field: "lastName",
        payload: "Last Name should be at least 3 characters long",
      });
      error = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.emailAddress.value.trim())) {
      dispatch({
        type: "HANDLE_ERROR_CHANGE",
        field: "emailAddress",
        payload: "Please enter a valid email address",
      });
      error = true;
    }

    if (state.password.value !== state.confirmPassword.value) {
      dispatch({
        type: "HANDLE_ERROR_CHANGE",
        field: "confirmPassword",
        payload: "Password and Confirm Password should match",
      });
      error = true;
    }

    return error;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = handleValidation();

    if (!errors) {
      dispatch({
        type: "HANDLE_INPUT_CHANGE",
        field: "successMsg",
        payload: "Form submitted successfully!",
      });
    }
  };

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <br />
        <input
          required={true}
          type='text'
          placeholder='Prerana'
          name='firstName'
          value={state.firstName.value}
          onChange={handleInputText}
        />
        <p className='error'>{state.firstName.error}</p>
      </label>

      <br />

      <label>
        Last Name
        <br />
        <input
          required={true}
          type='text'
          placeholder='Nawar'
          name='lastName'
          value={state.lastName.value}
          onChange={handleInputText}
        />
        <p className='error'>{state.lastName.error}</p>
      </label>

      <br />

      <label>
        Email Address
        <br />
        <input
          required={true}
          type='email'
          placeholder='precodes@gmail.com'
          name='emailAddress'
          value={state.emailAddress.value}
          onChange={handleInputText}
        />
        <p className='error'>{state.emailAddress.error}</p>
      </label>

      <br />

      <label>
        Password
        <br />
        <input
          required={true}
          type='password'
          placeholder='*******'
          name='password'
          value={state.password.value}
          onChange={handleInputText}
        />
        <p className='error'>{state.password.error}</p>
      </label>

      <br />

      <label>
        Confirm Password
        <br />
        <input
          required={true}
          type='password'
          placeholder='*******'
          name='confirmPassword'
          value={state.confirmPassword.value}
          onChange={handleInputText}
        />
        <p className='error'>{state.confirmPassword.error}</p>
      </label>

      <br />

      <button type='submit'>Register</button>
      <p className='success'>{state.successMsg.value}</p>
    </form>
  );
}

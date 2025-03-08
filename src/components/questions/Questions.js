import React, { useState } from "react";
import "./Questions.css";
import TextField from "@mui/material/TextField";

export const Questions = () => {
  const [isChecked, setIsChecked] = useState(false); 

 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="section4">
      <div className="questions">
        <p className="questions_p1">Остались вопросы?</p>
        <p className="questions_p2">
          Заполните форму, мы свяжемся с вами в ближайшее время, ответим на все
          вопросы и предоставим консультацию по ассортименту.
        </p>
        <form className="inp2">
          <div style={{ display: "flex" }}>
            <TextField
              className="filled-basic"
              id="filled-basic"
              label="Имя"
              variant="filled"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(12, 9, 9, 0.3)", 
                  },
                  "&:after": {
                    borderBottomColor: "white",
                  },
                  "&:before": {
                    borderBottomColor: "white",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />
            <TextField
              className="filled-basic"
              id="filled-number"
              label="Номер телефона"
              type="number"
              variant="filled"
              sx={{
                input: {
                  color: "white",
                  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                    {
                      display: "none",
                    },
                  "-moz-appearance": "textfield",
                },
                label: { color: "white" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(12, 9, 9, 0.3)", 
                  },
                  "&:after": {
                    borderBottomColor: "white",
                  },
                  "&:before": {
                    borderBottomColor: "white",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />
          </div>
          <div className="check">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="check_p">
              Я согласен(а) с Политикой конфиденциальности.
            </p>
          </div>
          <button className="check_btn" disabled={!isChecked}>
            Оставить заявку
          </button>
        </form>
      </div>
    </section>
  );
};

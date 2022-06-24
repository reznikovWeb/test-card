import * as yup from "yup";

export const validationsSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(16, "Must be exactly 16 digits")
    .max(16, "Must be exactly 16 digits")
    .required("Card Number must be written"),
  expirationDate: yup
    .string()
    .matches(/[0-9][0-9]-[0-9][0-9][0-9][0-9]/, "Must have format MM-YYYY")
    .min(7, "Must have format MM-YYYY")
    .max(7, "Must have format MM-YYYY")
    .required("Expiration Date must be written"),
  cvv: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Must be exactly 16 digits")
    .max(3, "Must be exactly 16 digits")
    .required("CVV code must be written"),
  amount: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Amount must be written"),
});

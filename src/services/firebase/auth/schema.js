import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
});

export const loginValidation = () => useForm({
    resolver: yupResolver(loginSchema),
});





import { z } from "zod";

export interface ISignUpForm{
    email: string;
    password: string;
}
export const signUpForm_initialState: ISignUpForm = {
    email: '',
    password: ''
}
export const formValidations = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8,'Password must be at least 8 characters'),
});

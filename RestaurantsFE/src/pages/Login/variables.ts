import { z } from "zod";

export interface ILoginForm{
    email: string;
    password: string;
}
export const loginForm_initialState: ILoginForm = {
    email: '',
    password: ''
}
export const formValidations = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8,'Password must be at least 8 characters'),
});

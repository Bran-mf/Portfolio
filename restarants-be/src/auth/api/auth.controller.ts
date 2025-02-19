import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService) {}
    @Post('login')
    signIn(@Body() signInDto: SignInDto){
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
    @Post('register')
    signUp(@Body() signUpDto: SignUpDto){
        return this.authService.signUp(signUpDto);
    }
 
}
